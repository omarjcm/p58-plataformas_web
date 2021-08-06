const model = require('./model')

function agregarCarrera( carrera ) {
    const objeto = new model( carrera )
    objeto.save()
}

function obtenerCarreras() {
    let filtro = {}
    const objeto = model.find( filtro )
    return objeto
}

function actualizarCarrera( carrera ) {
    const objeto = model.findOne( {abreviatura: carrera.abreviatura} )
    objeto.nombre = carrera.nombre
    const resultado = objeto.save()
    return resultado
}

function eliminarCarrera( abreviatura ) {
    return model.deleteOne({abreviatura: abreviatura})
}

module.exports = {
    agregar: agregarCarrera,
    obtener: obtenerCarreras,
    actualizar: actualizarCarrera,
    eliminar: eliminarCarrera,
}