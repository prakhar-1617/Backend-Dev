//destructuring methos
// const {add,remove}=require("./math")
// console.log(add(1,2),remove(1,3));

// const fs=require("fs");

// fs.writeFileSync("./basic.txt","This is test file")

// fs.writeFile("./practice.txt","this is async file content",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file is created")
//     } 
// })

// fs.appendFileSync("test.txt",new Date().toLocaleString())
// const file=fs.readFileSync("test.txt","utf-8")
// console.log(file)

const http=require("http");

const server= http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application\json"})
    res.end("resposne is closed")
})
server.listen(3000,()=>{
    console.log("server is running on port 3000");
})