import http from 'node:http';

import {route} from './route.js'

const PORT = 3500;
const HOST = "localhost";

const server = http.createServer(route);

server.listen(PORT, () => {
    console.log(`\nServer runs on:\thttp://${HOST}:${PORT}`);
});