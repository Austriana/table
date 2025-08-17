import http from 'node:http';
import {route} from './route.js'
import 'dotenv/config'

const PORT = process.env.PORT||3000;

const server = http.createServer(route);
server.listen(PORT, () => {
    console.log(`\nServer runs on:\thttp://localhost:${PORT}`);
});