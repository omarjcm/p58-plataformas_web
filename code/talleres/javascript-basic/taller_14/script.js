var investigador1 = {
    nombre: 'Joel',
    apellido: 'Larreátegui',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'jlarreateguiz@est.ups.edu.ec',
    edad: 22
}

var investigador2 = {
    nombre: 'Luccy',
    apellido: 'Chimbolema',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'lchimbolema@est.ups.edu.ec',
    edad: 22
}

var imprimirNombreMayusculas = function(objeto) {
    console.log(`${objeto.nombre.toUpperCase()} ${objeto.apellido}`)
}

imprimirNombreMayusculas(investigador1)
imprimirNombreMayusculas(investigador2)

var imprimirApellidoMinusculas = function(objeto) {
    let { apellido } = objeto
    console.log(`${objeto.nombre} ${apellido.toLowerCase()}`)
}

imprimirApellidoMinusculas(investigador1)
imprimirApellidoMinusculas(investigador2)

imprimirNombreMayusculas( {nombre: 'Guillermo', apellido: 'Pizarro'} )

console.log('============ Paso por referencia')

console.log( investigador1.edad )

const cumpleanios_ref = function (objeto) {
    objeto.edad += 1
}

cumpleanios_ref( investigador1 )
console.log( investigador1.edad )


console.log('============ Paso por valor')

console.log( investigador2.edad )

const cumpleanios_val = function( edad ) {
    console.log( edad += 1 )
}

cumpleanios_val( investigador2.edad )
console.log( investigador2.edad )

const cumpleanios_val2 = function(objeto) {
    return {
        ... objeto,
        edad: objeto.edad + 1
    }
}

objeto = cumpleanios_val2( investigador2 )
console.log( investigador2.edad )
console.log( objeto.edad )








