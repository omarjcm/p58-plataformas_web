const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    const filtroUsuario = req.query.usuario || null
    controller.obtenerUsuarios( filtroUsuario )
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.post('/', function(req, res) {
    controller.agregarUsuario(req.body.nombre, req.body.apellido, 
            req.body.usuario, req.body.clave, req.body.carrera)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.patch('/', function(req, res) {
    controller.actualizarUsuario(req.body.nombre, req.body.abreviatura)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

router.delete('/', function(req, res) {
    controller.eliminarUsuario(req.body.abreviatura)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
})

module.exports = router