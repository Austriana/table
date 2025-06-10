import fsPromise from 'node:fs/promises';
import fs from 'node:fs';


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

const readJson = await fsPromise.readFile('json.json','utf-8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log(`json.json read success`);
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
            console.log(add);
            writeFile('new_json.json', dataObj);
        }
    })
};

module.exports={
    handleJsonFile,
    writeFile,
    readJson,
    readScript,
    readCss,
    readHtml
}