const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    if (req.query.error == 'ok') { 
        response.error(req, res, 'Error simulado.')
    } else {
        response.success(req, res, 'Hola mundo desde GET.')
    }
})

router.post('/', function(req, res) {
    response.success(req, res, 'Hola mundo desde POST.')
})

router.delete('/mensaje', function(req, res) {
    response.success(req, res, 'Eliminando correctamente.')
})

let puerto = 3000

app.use('/', express.static('public'))

app.listen(puerto)
console.log( `La aplicación está escuchando en http://localhost:${puerto}`)