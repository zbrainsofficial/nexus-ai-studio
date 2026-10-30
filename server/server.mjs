import http from 'node:http';
import { handleChatGeneration, getAvailableModels } from './controllers/chatController.mjs';

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // Route: GET /api/health
  if (req.method === 'GET' && url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', uptime: process.uptime(), timestamp: new Date() }));
    return;
  }

  // Route: GET /api/models
  if (req.method === 'GET' && url.pathname === '/api/models') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ models: getAvailableModels() }));
    return;
  }

  // Route: POST /api/chat
  if (req.method === 'POST' && url.pathname === '/api/chat') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const response = handleChatGeneration(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
});

export { server };

if (process.argv[1] && process.argv[1].endsWith('server.mjs')) {
  server.listen(PORT, () => {
    console.log(`[Nexus AI Studio API] Running on http://localhost:${PORT}`);
  });
}
