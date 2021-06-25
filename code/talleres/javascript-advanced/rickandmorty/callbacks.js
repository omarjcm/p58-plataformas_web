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

    fetchData( API + data.results[0].id, function(error2, data2) {
        if (error2)
            return console.error( error2 )

        console.log( data2.name )
        
        fetchData( API + data.results[1].id, function(error3, data3) {
            if (error3)
                return console.error( error3 )
    
            console.log( data3.name )

            fetchData( API + data.results[2].id, function(error4, data4) {
                if (error4)
                    return console.error( error4 )
        
                console.log( data4.name )
            } )
        } )
    } )
}

const invocacionAsincronica = function(error, data) {
    if (error)
        return console.error( error )

    for (let i=0; i<10; i++) {
        fetchData( API + data.results[i].id, function(error4, data4) {
            if (error4)
                return console.error( error4 )
    
            console.log( data4.name )
        } )
    }
}

fetchData(API, invocacionAsincronica)