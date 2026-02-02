// const express = require("express");

// const app = express();

// const PORT = 8000;

// app.get("/", (req, res) => {
//     res.send("welcome to home page")
// })

// app.get("/users", (req, res) => {
//     res.send("<h1>This is user page</h1>");
// })

// app.get("/users/:id", (req, res) => {
//     const userID = req.params.id;
//     res.send(`you are requesting for users: ${userID} `);
// })

// app.listen(PORT, () => {
//     console.log(`server is running on port :${PORT}`);
// })
const express=require("express");

const app=express();

const PORT =8000;
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/users",(req,res)=>{
    res.send("<h1>this is users page</h1> ")
})
const students=[
    {id:1,name:"Alice"},
    {id:2,name:"Alice"},
    {id:3,name:"Alice"},
    {id:4,name:"Alice"}

]
app.get("/users/:id",(req,res)=>{
    const userId=req.params.id
    res.send(`You are requesting for User Id:${userId}`)
})

app.get("/students",(req,res)=>{
    res.json(students);
})
app.get("/students/:id", (req, res) => {
    const id = req.params.id;
})
app.listen(PORT,()=>{
    console.log(`Server is Running on port:${PORT}`)
})


