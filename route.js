import * as handle from './readFile.js';

export const route = (req, res) => {
    switch (req.url){
        case '/':
            res.end(handle.readHtml);
            break;

        case '/index.html':
            res.end(handle.readHtml);
            break;

        case '/style.css':
            res.end(handle.readCss);
            break;

        case '/script.js':
            res.end(handle.readScript);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>Upps something went wrong!</h1>');
    }
};