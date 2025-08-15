import http from 'node:http';
import { WebSocketServer, WebSocket } from 'ws';
import {route} from './route.js'

const PORT = process.env.PORT||80;

const server = http.createServer(route);
// ws ------------------------------------------------------------------
const wss = new WebSocketServer({noServer:true})

server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit('connection', ws, req);
    })
});

wss.on('connection', (ws, req) => {
        console.log(`client connected`);
    ws.on('error', (error)=>{
        console.log(`ws error: ${error}`);
    });
    ws.on('message', (msg, isBinary) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(msg, {binary: isBinary});
            }
        })
    });
    ws.on('close', ()=>{
        console.log(`client disconnected`);
    });
});
// --------------------------------------------------------------------
server.listen(PORT, () => {
    console.log(`\nServer runs on:\thttp://localhost:${PORT}`);
});