import fsPromise from 'node:fs/promises';

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

export {
    readHtml,
    readCss,
    readScript
};