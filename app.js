const express = require('express')

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.json({'result': true})
})



app.get("/not-found", (req, res) => {
    res.status(404).json({'result': false})
})

module.exports = app;
