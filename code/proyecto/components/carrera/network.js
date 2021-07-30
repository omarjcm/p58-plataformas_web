const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    controller.obtenerCarreras()
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.post('/', function(req, res) {
    controller.agregarCarrera(req.body.nombre, req.body.abreviatura)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.patch('/', function(req, res) {
    controller.actualizarCarrera(req.body.nombre, req.body.abreviatura)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.delete('/', function(req, res) {
    controller.eliminarCarrera(req.body.abreviatura)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

module.exports = router