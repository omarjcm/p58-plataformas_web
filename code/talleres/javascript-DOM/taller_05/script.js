
function agregarElemento() {
    var texto = document.getElementById('texto')
    
    var container = document.getElementById('container')
    container.outerHTML = '<h1>' + texto.value + '</h1>'
}