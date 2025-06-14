import { readHtml, readCss, readScript, readModule } from './readFile.js';

export const route = (req, res) => {
    switch (req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(readHtml);
            break;

        case '/index.html':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(readHtml);
            break;

        case '/style.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(readCss);
            break;

        case '/script.js':
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(readScript);
            break;

        case '/module.js':
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(readModule);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>Upps something went wrong!</h1>');
    }
};