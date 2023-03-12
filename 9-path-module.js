const path=require('path');
console.log(path.sep);

const file=path.join('content','subfolder','test.txt');
console.log(path.basename(file));
console.log(path.resolve(__filename));
const absolutepath=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutepath);
