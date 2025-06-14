import http from 'node:http';

import {route} from './route.js'

let PORT = 3500;
let HOST = "localhost";

const server = http.createServer(route);

server.listen(PORT, HOST, () => {
    console.log(`\nServer runs on:\thttp://${HOST}:${PORT}`);
});