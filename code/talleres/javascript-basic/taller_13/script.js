var estudiantes = [ 
    'Aaron Pacheco', 
    'Alan Vergara', 
    'Alex Reyes', 
    'Alex Diaz', 
    'Allison Gavilanez',
    'Angel Molina',
    'Ariel Zunio',
    'Eduardo Alvarado',
    'David Monar'
 ]

const pasaste = () => {
    let valorAleatorio = Math.random()
    if (valorAleatorio > 0.5) {
        return 'Has pasado el curso de Plataformas Web.'
    } else {
        return 'Te has quedado del curso de Plataformas Web.'
    }
}

var saludarEstudiante = function(estudiante) {
    console.log( `Hola, ${estudiante}, tengo un mensaje para ti: ${pasaste()}` )
}

//for (let i=0; i<estudiantes.length; i++) {
//    saludarEstudiante(estudiantes[i])
//}

//for (let estudiante of estudiantes) {
//    saludarEstudiante(estudiante)
//}

//while( estudiantes.length > 0 ) {
//    let estudiante = estudiantes.shift()
//    saludarEstudiante( estudiante )
//}

estudiantes.forEach( (estudiante) => saludarEstudiante(estudiante) )