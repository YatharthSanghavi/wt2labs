const fs = require('fs').promises;

// fs.readFile('a.txt','utf8',(err,data)=>{
//     if(err){
//         console.log('error in reading file: ',err);
//         return;
//     }
//     console.log('file content: ', data);
// })

// try{
//     const data = fs.readFileSync('a.txt','utf8');
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

// async function writefile() {
//     try{
//         await fs.writeFile('a.txt','hi heelo how are you','utf8')
//         const data={name:'John',age:230};
//         await fs.writeFile('data.json',JSON.stringify(data,null,2),'utf8');
//         console.log("created");
//     }catch(err){
//         console.error("error in wrinting file: ",err);
//     }
// }
// writefile();

// async function deleteFile() {
//     const filePath = "a.txt";
//     try{
//         await fs.access(filePath);
//         await fs.unlink(filePath);
//         console.log('file deleted');
//     }catch(err){
//         if(err.code === "ENOENT"){
//             console.log("file does not exits");
//         }else{
//             console.error("error deleting file: ",err);
//         }
//     }
// }
// deleteFile()