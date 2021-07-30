const storage = require('./storage')

function agregarCarrera( nombre, abreviatura ) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura
        }
        storage.agregar(carrera)
        resolve(carrera)
    })
}

function obtenerCarreras() {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener() )
    })
}

function actualizarCarrera( nombre, abreviatura ) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            abreviatura: abreviatura
        }
        storage.actualizar( carrera )
        resolve( carrera )
    })
}

function eliminarCarrera( abreviatura ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( abreviatura )
        resolve( abreviatura )
    })
}

module.exports = {
    agregarCarrera,
    obtenerCarreras,
    actualizarCarrera,
    eliminarCarrera,
}