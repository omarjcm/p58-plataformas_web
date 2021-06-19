
function agregarElemento() {
    var texto = document.getElementById('texto')
    
    var h1 = document.createElement('h1')
    var contenido = document.createTextNode( texto.value )
    h1.appendChild( contenido )
    
    var container = document.getElementById('container')
    container.appendChild(h1)
}