async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            print(`Hola soy ${nombre}`)
            resolve( nombre )
        }, 1000)    
    })
}

async function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            print('Bla bla bla...')
            resolve()
        }, 1000)
    })
}

async function adios( nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            print(`¡Adiós ${nombre}!`)
            resolve()
        }, 1000)    
    })
}

async function main() {
    print(`Incializando conversación...`)
    let nombre = await hola( 'Guillermo' )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await hablar( )
    await adios( nombre )
    print(`Finalizando conversación...`)
}

main()

















function print(texto) {
    console.log( texto )
}