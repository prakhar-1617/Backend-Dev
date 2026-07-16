const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// Sample GET API
app.get("/api/user", (req, res) => {
    res.json({
        name: "Prakhar",
        skill: "Node.js",
        status: "Learning Backend"
    });
});

// Sample POST API
app.post("/api/data", (req, res) => {
    const data = req.body;
    res.send("Data received: " + JSON.stringify(data));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});







const fs = require("fs");

// Write file
fs.writeFileSync("test.txt", "Hello File System");

// Read file
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

//append file
fs.appendFileSync("data.txt", "\nThis is new line");

//delete file
fs.unlinkSync("data.txt");



//http module

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js HTTP Server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});


//os module
const os = require("os");

console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU Info:", os.cpus());
console.log("Home Directory:", os.homedir());
