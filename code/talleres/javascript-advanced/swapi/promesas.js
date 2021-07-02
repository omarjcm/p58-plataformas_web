const fetchData = require("../utils/fetchData")

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    fetchData( URL )
        .then( (data) => {
            console.log( data.name )
        } )
        .catch( (error) => {
            console.log( error )
        } )
}

for (let i = 1; i<=10; i++) {
    obtenerPersonaje( i )
}