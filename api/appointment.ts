import type { IncomingMessage, ServerResponse } from 'http';

function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    // In Vercel serverless environment, req.body may already be parsed
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
    const { name, phone, category, date, time, notes } = body;

    if (!name || !phone) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          success: false,
          error: 'Name and Phone number are required.',
        })
      );
      return;
    }

    // In production, you can forward this to email, WhatsApp, or SMS
    console.log('[The Style Lab] New Appointment Request Received:', {
      name,
      phone,
      category: category || "Men's Cuts & Fades",
      date: date || 'Not specified',
      time: time || 'Afternoon',
      notes: notes || 'None',
      receivedAt: new Date().toISOString(),
    });

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        success: true,
        message: 'Appointment request received successfully.',
        appointment: {
          name,
          phone,
          category: category || "Men's Cuts & Fades",
          date,
          time,
          salon: 'The Style Lab',
          address: '82 Chatteshwari Rd, Chattogram 4000',
        },
      })
    );
  } catch (err: any) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        success: false,
        error: 'Internal server error processing appointment.',
      })
    );
  }
}
