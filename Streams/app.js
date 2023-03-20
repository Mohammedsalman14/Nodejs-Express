const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text=fs.readFileSync('../content/big-file.txt','utf-8');
    // res.end(text);
    const filestream = fs.createReadStream('../content/big-file.txt', 'utf-8');
    filestream.on('open', () => {
        filestream.pipe(res);
    })
    filestream.on('error', (error) => {
        res.end(error);
    })
  
}).listen(5000);