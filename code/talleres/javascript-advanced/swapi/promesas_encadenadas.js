const fetchData = require("../utils/fetchData")

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const obtenerPersonaje = function(id) {
    return `${API_URL}${PEOPLE_URL.replace(':id', id)}`
}

fetchData( obtenerPersonaje(1) )
    .then( (data) => {
        console.log( data.name )
        return fetchData(obtenerPersonaje(2))
    } )
    .then( (data) => {
        console.log( data.name )
        return fetchData(obtenerPersonaje(3))
    } )
    .then( (data) => {
        console.log( data.name )
        return fetchData(obtenerPersonaje(4))
    } )
    .then( (data) => {
        console.log( data.name )
        return fetchData(obtenerPersonaje(5))
    } )
    .then( (data) => {
        console.log( data.name )
    } )
    .catch( (error) => {
        console.log( error )
    } )
