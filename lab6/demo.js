const http = require("http");

const Server= http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type" : "text/html"});
    if(req.url==="/"){
            res.write("<h1>home page</h1>");
    }
    else if(req.url==="/about"){
        res.write("<h1>about page</h1>");
    }
    else if(req.url==="/service"){
        res.write("<h1>service page</h1>");
    }
    else if(req.url==="/contact"){
        res.write("<h1>contact page</h1>");
    }
    else if(req.url==="/help"){
        res.write("<h1>help page</h1>");
    }
    else{
        res.write("<h1>page not found</h1>")
    }
    res.end();
});
Server.listen(3000,()=>{
    console.log("http://localhost:3000")
})