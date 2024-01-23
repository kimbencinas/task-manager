const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mysql = require('mysql12');

app.use(express.json())

//Dummy data
app.get("/api", (req, res) => {
    res.json({ "tasks": ["taskOne", "taskTwo", "taskThree"] });
});

app.post("/api/login", (req, res) => {
    const username = req.body.username;
    const user = { name: username };
});

app.post('/api/tasks', (req, res) => {
    res.json({

    });
});

app.listen(5000, () => { console.log("Server started on port 5000") });