import http from 'node:http';

import {route} from './route.js'

let PORT = 3500;
// let HOST = "localhost";

const server = http.createServer(route);

server.listen(PORT, () => {
    console.log(`\nServer runs on:\thttp://${PORT}`);
});
server.on('data', () => {
    console.log('new client')
})
server.on('close', () => {
    console.log('client lost');
})
