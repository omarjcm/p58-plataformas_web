const fetchData = require("../utils/fetchData")

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

let url = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

fetchData( url )
    .then( (data) => {
        console.log( data.name )
        url = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
        return fetchData(url)
    } )
    .then( (data) => {
        console.log( data.name )
        url = `${API_URL}${PEOPLE_URL.replace(':id', 3)}`
        return fetchData(url)
    } )
    .then( (data) => {
        console.log( data.name )
        url = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
        return fetchData(url)
    } )
    .then( (data) => {
        console.log( data.name )
        url = `${API_URL}${PEOPLE_URL.replace(':id', 5)}`
        return fetchData(url)
    } )
    .then( (data) => {
        console.log( data.name )
    } )
    .catch( (error) => {
        console.log( error )
    } )
