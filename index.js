const express = require('express')
const app = express()
const env = require('dotenv')

env.config()

const port = process.env.PORT


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/women1.html')
})

app.listen(port, () => {
    console.log('server is running');
})