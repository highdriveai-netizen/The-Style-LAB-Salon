import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse & { json?: (data: any) => void; status?: (code: number) => any }) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  res.statusCode = 200;
  res.end(
    JSON.stringify({
      status: 'ok',
      salon: 'The Style Lab',
      category: "Men's Salon",
      location: '82 Chatteshwari Rd, Chattogram 4000, Bangladesh',
      phone: '01609662296',
      timestamp: new Date().toISOString(),
    })
  );
}
