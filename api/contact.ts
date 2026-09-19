import type { IncomingMessage, ServerResponse } from 'http';

function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    if ((req as any).body) {
      if (typeof (req as any).body === 'string') {
        try {
          resolve(JSON.parse((req as any).body));
          return;
        } catch {
          resolve({});
          return;
        }
      }
      resolve((req as any).body);
      return;
    }

    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(
  req: IncomingMessage & { body?: any },
  res: ServerResponse
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ success: false, error: 'Method not allowed. Use POST.' }));
    return;
  }

  try {
    const body = await parseBody(req);
    const { name, phone, message } = body;

    if (!phone) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          success: false,
          error: 'Phone number is required.',
        })
      );
      return;
    }

    console.log('[The Style Lab] New Customer Inquiry Received:', {
      name: name || 'Anonymous',
      phone,
      message: message || 'General Inquiry',
      receivedAt: new Date().toISOString(),
    });

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        success: true,
        message: 'Inquiry received. The Style Lab will contact you shortly.',
        inquiry: {
          name,
          phone,
          salon: 'The Style Lab',
          contact: '01609662296',
        },
      })
    );
  } catch (err: any) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        success: false,
        error: 'Internal server error processing contact message.',
      })
    );
  }
}
