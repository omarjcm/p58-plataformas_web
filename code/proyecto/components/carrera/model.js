const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    abreviatura: {
        type: String,
        required: true
    },
})

const model = mongoose.model( 'Carrera', mySchema )
module.exports = model