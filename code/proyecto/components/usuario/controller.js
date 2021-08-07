const storage = require('./storage')

function agregarUsuario( nombre, apellido, usuario, clave, carrera ) {
    return new Promise((resolve, reject) => {
        if (!nombre || !apellido || !usuario || !clave || !carrera) {
            return reject('Los datos se encuentran incompletos.')
        }

        let objeto = {
            nombre: nombre,
            apellido: apellido,
            usuario: usuario,
            clave: clave,
            fecha_registro: new Date(),
            ref_carrera: carrera,
        }
        storage.agregar(objeto)
        return resolve(objeto)
    })
}

function obtenerUsuarios( filtroUsuario ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroUsuario ) )
    })
}

function actualizarUsuario( nombre, apellido, clave, carrera ) {
    return new Promise((resolve, reject) => {
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            clave: clave,
            ref_carrera: carrera,
        }
        storage.actualizar( usuario )
        resolve( usuario )
    })
}

function eliminarUsuario( abreviatura ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( abreviatura )
        resolve( abreviatura )
    })
}

module.exports = {
    agregarUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
}