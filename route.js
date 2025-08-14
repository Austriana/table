import { readHtml, readCss, readScript, readModule } from './readFile.js';

export const route = (request, response) => {

    handle_Data(request, response);

    switch (request.url){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(readHtml);
            break;

        case '/index.html':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(readHtml);
            break;

        case '/style.css':
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.end(readCss);
            break;

        case '/script.js':
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            response.end(readScript);
            break;

        case '/module.js':
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            response.end(readModule);
            break;

        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>Upps something went wrong!</h1>');
    }
};
