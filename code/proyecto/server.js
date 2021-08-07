const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const config = require('./config')
const routes = require('./network/routes')

db( config.DB_URL )
var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

app.use('/', express.static('public'))

app.listen( config.PUERTO )
console.log( `La aplicación está escuchando en http://localhost:${config.PUERTO}`)