const { basename } = require('path');
const path = require('path');
console.log(path.sep);

const file = path.join('content', 'subfolder', 'test.txt');
console.log(path.dirname(file));
// console.log(path.resolve(__filename));
// const absolutepath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolutepath);
console.log(path.resolve(__filename));



const path = require('path');

const fullPath = '/Users/john/Documents/myfile.txt';

console.log(path.basename(fullPath)); // myfile.txt
console.log(path.dirname(fullPath)); // /Users/john/Documents
console.log(path.extname(fullPath)); // .txt
console.log(path.isAbsolute(fullPath)); // true

const newPath = path.join('/Users/john', 'Documents', 'myfolder', 'myfile.txt');
console.log(newPath); // /Users/john/Documents/myfolder/myfile.txt

const normalizedPath = path.normalize('/Users/john/Documents/../myfolder/./myfile.txt');
console.log(normalizedPath); // /Users/john/myfolder/myfile.txt

const parsedPath = path.parse(fullPath);
console.log(parsedPath); // { root: '/', dir: '/Users/john/Documents', base: 'myfile.txt', ext: '.txt', name: 'myfile' }

