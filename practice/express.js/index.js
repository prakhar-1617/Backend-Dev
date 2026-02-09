const express = require("express");

const app = express();
const PORT = 8000;

/* Middleware to read JSON body */
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
    res.send("<h1>This is users page</h1>");
});

const students = [
    { id: 1, name: "Alice", branch: "CS" },
    { id: 2, name: "Bob", branch: "EC" },
    { id: 3, name: "Crisi", branch: "EE" },
    { id: 4, name: "Steve", branch: "ME" }
];

/* User by ID */
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`You are requesting for User Id: ${userId}`);
});

/* Search students by branch */
app.get("/students/search", (req, res) => {
    const branch = req.query.branch;

    if (!branch) {
        return res.json(students);
    }

    const foundStudents = students.filter(s => s.branch === branch);
    res.json(foundStudents);
});

/* Get all students */
app.get("/students", (req, res) => {
    res.json(students);
});

/* Get student by ID */
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

/* Register a new student */
app.post("/students/register", (req, res) => {
    const data = req.body;

    if (!data.id || !data.name || !data.branch) {
        return res.status(400).json({ message: "Please provide id, name and branch" });
    }

    students.push(data);
    res.json({
        message: "Student registered successfully",
        students
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
