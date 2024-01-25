require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

app.use(express.json())

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to database.');
    }
});

//Dummy data
app.get("/api", (req, res) => {
    res.json({ "tasks": ["taskOne", "taskTwo", "taskThree"] });
});

app.post("/api/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                if (results.length > 0) {
                    const accessToken = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET);
                    res.json({ accessToken: accessToken });
                } else {
                    res.status(401).json({ error: 'Invalid user credentials' });
                }
            }
        }
    )

});

app.post('/api/tasks', (req, res) => {
    res.json({

    });
});

app.listen(5000, () => { console.log("Server started on port 5000") });