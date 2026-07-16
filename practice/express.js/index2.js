const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const port = 3000;
const usersFilePath = path.join(__dirname, 'users.json');

const user = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
]
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/user', (req, res) => {
    res.json(user);
});
app.get('/user/city/:city', (req, res) => {
    const city = req.params.city;
    const filteredUsers = user.filter(u => u.city === city);
    res.json(filteredUsers);
});
app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = user.findIndex(u => u.id === userId);
    const data = user[userIndex];
    if (data) {
        res.json(data);
    } else {
        res.status(404).send('User not found');
    }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/user/register', (req, res) => {
    const data = req.body;
    user.push(data);

    fs.writeFile(usersFilePath, JSON.stringify(user, null, 2), (err) => {
        if (err) {
            console.error('Error writing to users.json:', err);
            return res.status(500).json({ error: 'Failed to save user data' });
        }
        res.json({ message: 'User registered successfully', user: data });
    });
});