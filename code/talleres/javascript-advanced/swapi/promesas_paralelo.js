const fetchData = require("../utils/fetchData")

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const obtenerPersonaje = function(id) {
    return `${API_URL}${PEOPLE_URL.replace(':id', id)}`
}

let ids = [1, 2, 3, 4, 5]
var promesas = ids.map( id => fetchData( obtenerPersonaje(id) ) )

Promise
    .all( promesas )
    .then( data => {
        for (let i=0; i<data.length; i++) {
            console.log( data[i].name )
        }
    } )
