const fs = require('fs');
const path = require('path');
const http = require('http');
const URL = require('url');

const Data_file = path.join(__dirname,'text.txt');
const Port = 3000;

const server = http.createServer(async (req, res) => {
    const {method ,url }= req;
    if(url === "/add"){
        try{
            fs.writeFileSync("Data_file","hi this is the first file");
            res.end("file is createdand data added");
        }catch(error){
            res.end("cannot write");
        }
    }
    else if(url === "/append"){
        try{
            fs.appendFileSync(Data_file,"this is append");
            res.end("append successfully");
        }catch(error){
            res.end("cannot append");
        }
    }
    else if(url === "/read"){
        try {
            const data = await fs.readFileSync("./text.txt", 'utf8');
            res.end(data);
        } catch (error) {
            res.end("cannot read");
        }
    }
    else if(url === '/delete'){
        try{
            await fs.unlinkSync("./text.txt");
            res.end("file si deleted");
        }catch(error){
            res.end("cannot delte");
        }
    }else{
        res.end("hi");
    }
});
  
  
server.listen(Port, 'localhost', () => {
    console.log(`Server running at http://localhost:${Port}/`);
});