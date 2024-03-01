require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

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
    const task_time = req.body.task_time;
    const task_description = req.body.task_description;

    db.query(
        'INSERT INTO tasks (task_time, task_description) VALUES (?, ?)',
        [task_time, task_description],
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log(results);
                res.json({ message: 'Task successfully added.' });
            }
        }
    );
});

app.get('/api/tasks', (req, res) => {
    const currentDate = new Date().toISOString().slice(0, 10);

    db.query('SELECT * FROM tasks WHERE DATE(task_time) = ?', [currentDate], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ tasks: results });
        }
    })
})

/*
app.delete('/api/tasks', (req, res) => {
    
})
*/

app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const { task_time, task_description } = req.body;

    db.query(
        'UPDATE tasks SET task_time = ?, task_description = ? WHERE id = ?',
        [task_time, task_description, taskId],
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                res.json({ message: 'Task successfully updated.' });
            }
        }
    )
})

app.listen(5000, () => { console.log("Server started on port 5000") });