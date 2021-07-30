const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req, res) {
    if (req.query.error == 'ok') { 
        response.error(req, res, 'Error simulado.')
    } else {
        response.success(req, res, 'Hola mundo desde GET.')
    }
})

router.post('/', function(req, res) {
    response.success(req, res, 'Hola mundo desde POST.')
})

router.delete('/', function(req, res) {
    response.success(req, res, 'Eliminando correctamente.')
})

module.exports = router