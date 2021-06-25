function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            print(`Hola soy ${nombre}`)
            resolve( nombre )
        }, 1000)    
    })
}

function hablar( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            print('Bla bla bla...')
            resolve( nombre )
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            print(`¡Adiós ${nombre}!`)
            resolve( nombre )
        }, 1000)    
    })
}

print(`Inicializando conversación.`)
hola( `Guillermo` )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .then( (nombre) => {
        print(`Finalizando conversación con ${nombre}.`)
    } )
    .catch( (error) => {
        console.error( error )
    } )

function print(texto) {
    console.log( texto )
}