function hola(nombre, fn) {
    setTimeout(function(){
        print(`Hola soy ${nombre}`)
        fn( nombre )
    }, 1000)
}

function adios( nombre ) {
    setTimeout(function() {
        print(`¡Adiós ${nombre}!`)
        print('Finalizando conversación.')
    }, 1000)
}

function hablar( fn ) {
    setTimeout(function() {
        print('Bla bla bla...')
        fn()
    }, 1000)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar( function () {
            dialogar(nombre, --num_veces)
        } )
    } else {
        adios( nombre )
    }
}

function responder_hola( nombre ) {
    dialogar( nombre, 10)
}

print('Iniciando conversación.')
hola( 'Guillermo Pizarro', responder_hola )

function print(texto) {
    console.log(texto)
}