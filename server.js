import http from 'node:http';
import WebSocket, {WebSocketServer} from 'ws';
import * as handlefile from './handlefile.js';
import dotenv from 'dotenv';
dotenv.config();

let PORT = process.env.PORT || 3500;
let HOST = process.env.HOST || 'localhost';


const handleClient = (req, res) => {

    
    switch (req.url){
        case '/':
            res.write(handlefile.readHtml);
            break;

        case '/index.html':
            res.write(handlefile.readHtml);
            break;

        case '/style.css':
            res.write(handlefile.readCss);
            break;

        case '/script.js':
            res.write(handlefile.readScript);
            break;

        case req.url:
            if(req.url.slice(0, 5) !== '/json'){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('<h1>Upps something went wrong!</h1>');
                } else {
                res.write(handlefile.readJson);
                let add = req.url;
                handlefile.handleJsonFile('json.json', add);
            }
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('<h1>Upps something went wrong!</h1>');
    }
    res.end();
};


const server = http.createServer(handleClient);
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data, isBinary) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`\nServer runs on:\thttp://${HOST}:${PORT}`);
});