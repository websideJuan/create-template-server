const express = require('express')
const path = require('path')
const connectionDB = require('./db')
require('ejs')


connectionDB()

const app = express()


app.use("/static", express.static(path.join(__dirname, '../App mern-stack/dist')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


const routerHome = require('./routes/home')
const routerAbout = require('./routes/about')


app.use(routerHome)
app.use(routerAbout)


app.listen(3000)
console.log(`server on port ${3000}`)