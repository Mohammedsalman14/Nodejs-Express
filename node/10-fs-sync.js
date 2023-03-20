const {readFileSync,writeFileSync} =require('fs');

const first=readFileSync('./content/fist.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

console.log(first," ",second);



writeFileSync('./content/second.txt',' Am just appending my file...',{flag:'a'});