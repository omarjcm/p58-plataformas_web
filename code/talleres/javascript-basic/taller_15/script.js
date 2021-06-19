var docente = {
    nombre: 'Sergio',
    apellido: 'Suárez',
    peso: 180
}

const INCREMENTAR_PESO = 5

const aumentarPeso = (persona) => persona.peso += INCREMENTAR_PESO
const disminuirPeso = (persona) => persona.peso -= INCREMENTAR_PESO

const comerMucho = () => Math.random() < 0.8
const realizarDeportes = () => Math.random() < 0.5

console.log(`Al inicio del año el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} libras.`)

const META = docente.peso - 20

var dias = 0

while(docente.peso > META) {
    if (comerMucho()) {
        aumentarPeso(docente)
    } 
    if (realizarDeportes()) {
        disminuirPeso(docente)
    }
    dias += 1
    console.log( `Día: ${dias}.` )
}

console.log(`Al final del año el docente ${docente.nombre} ${docente.apellido} pesa ${docente.peso} libras.`)

