let persona1 = {
    nombre: 'Angel',
    apellido: 'Molina',
}

let persona2 = {
    nombre: 'Angel',
    apellido: 'Molina',
}

let persona3 = {
    nombre: 'Emilio',
    apellido: 'Aranda',
}

console.log(persona1 == persona2)
console.log(persona1 == persona3)

let otraPersona = {
    ... persona2
}

console.log(persona1 == otraPersona)
console.log(persona1.nombre == persona2.nombre && 
    persona1.apellido == persona2.apellido)
console.log(persona1.nombre === persona2.nombre && 
    persona1.apellido === persona2.apellido)
