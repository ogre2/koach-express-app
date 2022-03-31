// Importing express
const express = require('express')
// Importing mongoose
const mongoose = require('mongoose')
// Importing express-ejs-layouts
const ejsLayouts = require('express-ejs-layouts')
// Importing helmet
const helmet = require('helmet')
// Importing and confiuring dotenv
const dotenv = require('dotenv').config({ path:'./config.env' })
// Importing and enabling colors
const colors = require('colors').enable()
// Initializing express app
const app = express()
// Initializing application port
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Starting app
app.listen(PORT, () => {
    console.log(`[nodemon] server is running on port:${PORT}`.green)
})