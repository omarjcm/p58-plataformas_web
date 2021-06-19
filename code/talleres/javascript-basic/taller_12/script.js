var articulos = [ 
    { nombre: 'Bicicleta', costo: 240 },
    { nombre: 'TV Sony', costo: 1200 },
    { nombre: 'Laptop DELL', costo: 1000 },
    { nombre: 'Audifonos SONY', costo: 350 },
    { nombre: 'Mouse inalámbrico Kensington', costo: 60 },
    { nombre: 'Tablet', costo: 400 },
    { nombre: 'Cuaderno', costo: 4 },
    { nombre: 'How to Program in Javscript', costo: 100 }
]

console.log('-------------------------------------')
console.log('Uso del FOREACH')
console.log('-------------------------------------')

articulos.forEach( function(articulo) {
    console.log( articulo.nombre )
} )

console.log('-------------------------------------')
console.log('Uso del SOME')
console.log('-------------------------------------')
// Retorna un booleano si el elemento buscado (con cierto criterio) 
// se encuentra en la lista original (articulos)
var articulosBaratos = articulos.some( (articulo) => articulo.costo <= 500 )

console.log('-------------------------------------')
console.log('Uso del FILTER')
console.log('-------------------------------------')

var articulosFiltrados = articulos.filter( (articulo) => articulo.costo <= 100 )

console.log('-------------------------------------')
console.log('Uso del MAP')
console.log('-------------------------------------')

var nombreArticulos = articulos.map( (articulo) => articulo.nombre.toUpperCase() )

console.log('-------------------------------------')
console.log('Uso del FIND')
console.log('-------------------------------------')

var encuentraArticulo = articulos.find( (articulo) => articulo.nombre = 'Laptop DELL' )

