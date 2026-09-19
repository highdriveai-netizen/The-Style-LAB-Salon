import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

function localApiDevPlugin(): Plugin {
  return {
    name: 'local-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.url === '/api/health') {
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
          return;
        }

        if (req.url === '/api/appointment' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = body ? JSON.parse(body) : {};
              console.log('[The Style Lab Dev API] Appointment Request Received:', data);
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Appointment request received successfully.',
                  appointment: data,
                })
              );
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = body ? JSON.parse(body) : {};
              console.log('[The Style Lab Dev API] Contact Message Received:', data);
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Inquiry received. The Style Lab team will contact you shortly.',
                  inquiry: data,
                })
              );
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON body' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), localApiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
