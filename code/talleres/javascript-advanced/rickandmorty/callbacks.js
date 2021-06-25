const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, fn) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                fn(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error( `[error]: ${url_api}` )
                return fn(error, null)
            }
        }
    }
    xhttp.send()
}

const invocacionSincronica = function(error, data) {
    if (error)
        return console.error( error )

    console.log( data.info.count )

    for (let i=0; i<10; i++) {
        fetchData( API + data.results[i].id, funcionTemporal)
    }
}

const funcionTemporal = function(error, data) {
    if (error)
        return console.error( error )

    console.log(`${data.name}`)
}

fetchData(API, invocacionSincronica)