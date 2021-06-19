class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola soy ${this.nombre} ${this.apellido}.`)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto(fn) {
        if (this.altura >= 1.7) {
            console.log(`Mi altura es ${this.altura} y soy alto.`)
        } else {
            console.log(`Mi altura es ${this.altura} y no soy alto.`)
        }

        if (fn) {
            fn(this.nombre)
        }
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar(fn) {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy deportista.`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido) {
    console.log(`Hola ${nombre}, ¿cómo estás?`)
}

function respuestaInadecuada(nombre) {
    console.log(`Hummm... ${nombre}. No te pregunté eso... disculpa.`)
}

var objeto1 = new Persona('Jorge', 'Benavides', 1.65)
objeto1.saludar( responderSaludo )
objeto1.soyAlto( respuestaInadecuada )

var objeto2 = new Deportista('Jaime', 'Sánchez')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soyAlto()
