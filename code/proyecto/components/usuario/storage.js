const model = require('./model')

function agregarUsuario( usuario ) {
    const objeto = new model( usuario )
    objeto.save()
}

function obtenerUsuarios( filtroUsuario ) {
    let filtro = {}
    if (filtroUsuario) {
        filtro = { usuario : filtroUsuario }
    }
    const objetos = model.find( filtro )
    return objetos
}

function actualizarUsuario( objeto ) {
    const nuevoObjeto = model.findOne( { usuario: objeto.usuario } )

    nuevoObjeto.nombre = objeto.nombre
    nuevoObjeto.apellido = objeto.apellido
    nuevoObjeto.clave = objeto.clave
    nuevoObjeto.ref_carrera = objeto.carrera
    const resultado = nuevoObjeto.save()
    return resultado
}

function eliminarUsuario( objeto ) {
    return model.deleteOne({usuario: objeto.usuario})
}

module.exports = {
    agregar: agregarUsuario,
    obtener: obtenerUsuarios,
    actualizar: actualizarUsuario,
    eliminar: eliminarUsuario,
}