const lista = [
    {nombre: 'Carrera de Computación', abreviatura: 'COMP'},
    {nombre: 'Administración de Empresas', abreviatura: 'ADM'},
]

function agregarCarrera( carrera ) {
    lista.push( carrera )
}

function obtenerCarreras() {
    return lista
}

function actualizarCarrera( carrera ) {
    for (let i=0; i<lista.length; i++) {
        if (carrera.abreviatura == lista[i].abreviatura) {
            lista[i] = carrera
            return 
        }
    }
}

function eliminarCarrera( abreviatura ) {
    for (let i=0; i<lista.length; i++) {
        if (abreviatura == lista[i].abreviatura) {
            delete lista[i]
            return 
        }
    }
}

module.exports = {
    agregar: agregarCarrera,
    obtener: obtenerCarreras,
    actualizar: actualizarCarrera,
    eliminar: eliminarCarrera,
}