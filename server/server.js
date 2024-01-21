const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ "tasks": ["taskOne", "taskTwo", "taskThree"] })
})

app.listen(5000, () => { console.log("Server started on port 5000") })