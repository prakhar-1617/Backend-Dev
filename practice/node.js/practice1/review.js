
const http = require("http");

const object={
    name:"Prakhar",
    skill:"Node.js",
    status:"Learning Backend"
};
const server=http.createServer((req,res)=>{
    res.write("Hello I am Prakhar");
    res.end(JSON.stringify(object));
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
});

