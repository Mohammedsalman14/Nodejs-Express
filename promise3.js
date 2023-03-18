const {readFile, writeFile}=require('fs').promises;
const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

const readwriteFn=async()=>{
    try{
        const myfile= await readFile('./content/myfile.txt','utf-8');
        const myfile2=await readFile('./content/second.txt','utf-8');
        await writeFile('./content/promResult.txt',
        `This txt form first file and second file ${myfile} ${myfile2}`,{flag:'a'});
        console.log(myfile, myfile2);
    }catch (err){
        console.log(err);
    }
}
readwriteFn();