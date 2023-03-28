const express = require('express')
const app = express()
const port = 7000


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/women1.html')
})

console.log(__dirname);

app.listen(port, () => {
    console.log('server is running');
})