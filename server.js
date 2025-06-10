import http from 'node:http';
import WebSocket, {WebSocketServer} from 'ws';

import { handleJsonFile, writeFile, readJson, readScript, readCss, readHtml } from "./handlefile.js";
import dotenv from 'dotenv';
dotenv.config();

let PORT = process.env.PORT || 3500;
let HOST = process.env.HOST || 'localhost';


const handleClient = (req, res) => {

    
    switch (req.url){
        case '/':
            res.write(readHtml);
            break;

        case '/index.html':
            res.write(readHtml);
            break;

        case '/style.css':
            res.write(readCss);
            break;

        case '/script.js':
            res.write(readScript);
            break;

        case req.url:
            if(req.url.slice(0, 5) !== '/json'){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('<h1>Upps something went wrong!</h1>');
                } else {
                res.write(readJson);
                let add = req.url;
                handleJsonFile('json.json', add);
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

});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`\nServer runs on:\thttp://${HOST}:${PORT}`);
});