const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./network/routes')

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

let puerto = 3000

app.use('/', express.static('public'))

app.listen(puerto)
console.log( `La aplicación está escuchando en http://localhost:${puerto}`)