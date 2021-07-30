const express = require('express')
const carrera = require('../components/carrera/network')
const usuario = require('../components/usuario/network')

const routes = function(server) {
    server.use('/carrera', carrera)
    server.use('/usuario', usuario)
}

module.exports = routes