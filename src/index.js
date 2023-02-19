const express = require('express')
const path = require('path')
const app = express()

app.use("/static", express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send(`path on ${req.url}`)
})

app.get('/pageOne', (req, res) => {
    res.send('page ONE')
})



app.listen(3000)
console.log(`server on port ${3000}`)