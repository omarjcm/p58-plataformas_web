const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const config = require('./config')
const routes = require('./network/routes')

db( config.dbUrl )
var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

app.use('/', express.static('public'))

app.listen( config.port )
console.log( `La aplicación está escuchando en http://localhost:${config.port}`)