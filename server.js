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

// Setting view engine to ejs
app.set('view engine', 'ejs')
// Setting views directory
app.set('views', __dirname + '/views')
// Setting app layout directory
app.set('layout', 'layouts/layout')
// Setting CSP
app.set({'Content-Security-Policy': "script 'self"})
// Linking jQuery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
// Linking popper
app.use('/popper', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'))
// Linking animate.css
app.use('/animate', express.static(__dirname + '/node_modules/animate.css/'))
// Linking feather-icons
app.use('/feather', express.static(__dirname + '/node_modules/feather-icons/dist/'))
// Linking bootstrap
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'))
// Linking public files
app.use(express.static('public'))
// Enabling ejs layouts
app.use(ejsLayouts)
// Enabling helmet
app.use(helmet())

// Importing index page router
const indexRouter = require('./routes/index')

// Using index router
app.use('/', indexRouter)

// Starting app
app.listen(PORT, () => {
    // Console message on successful launch
    console.log(`[nodemon] server is running on port:${PORT}`.green)
})