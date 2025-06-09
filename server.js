import http from 'node:http';
import fsPromise from 'node:fs/promises';
import fs from 'node:fs';
import WebSocket, {WebSocketServer} from 'ws';

const PORT = process.env.PORT || 3500;
const HOST = process.env.HOST || 'localhost';

const readHtml = await fsPromise.readFile('index.html', 'utf-8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log(`index.html read success`);
    }
});

const readCss = await fsPromise.readFile('style.css','utf-8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log(`style.css read success`);
    }
});

const readScript = await fsPromise.readFile('script.js','utf-8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log(`script.js read success`);
    }
});

const readJson = await fsPromise.readFile('new_json.json','utf-8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log(`new_json.json read success`);
    }
});

const writeFile = (myFileName, dataObj, add) => {
    Object.assign(dataObj, add);
    const dataString = JSON.stringify(dataObj, null, 2);
    fs.writeFile(myFileName, dataString, (err) => {
        if (err){
            console.log(err);
        } else {
            console.log(`write of ${myFileName} success `);
        }
    })
};

const handleJsonFile = (myFileName, add) => {
    fs.readFile(myFileName, (err, data) => {
        if (err){
            console.log(err);
        } else {
            console.log(`read ${myFileName} success!`);
            const dataObj = JSON.parse(data);
            writeFile('new_json.json', dataObj, add);
        }
    })
};

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
                handleJsonFile('json.json');
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
    console.log(`Server runs on http://${HOST}:${PORT}`);
});