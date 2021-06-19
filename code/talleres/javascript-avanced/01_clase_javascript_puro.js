function Extender(prototipoHijo, prototipoPadre) {
    // Se define una función Dummy
    let fn = function() {}
    // se hace una copia del prototipo padre en el prototipo de la función dummy
    fn.prototype = prototipoPadre.prototype
    // se crea una instancia del prototipo de la función dummy en el prototipo hijo
    prototipoHijo.prototype = new fn
    // se pasa la referencia de la "Clase" hija al prototipo de la misma clase.
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function() {
    if (this.altura >= 1.7) {
        console.log(`Mi altura es ${this.altura} y soy alto.`)
    } else {
        console.log(`Mi altura es ${this.altura} y no soy alto.`)
    }
}

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Extender(Deportista, Persona)

Deportista.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy deportista.`)
}

var objeto1 = new Persona('Jorge', 'Benavides', 1.65)
objeto1.saludar()
objeto1.soyAlto()

var objeto2 = new Deportista('Jaime', 'Sánchez')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soyAlto()
