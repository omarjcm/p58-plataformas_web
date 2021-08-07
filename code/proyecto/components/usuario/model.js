const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reqString = {
    type: String,
    required: true
}

const usuarioSchema = new Schema({
    nombre: reqString,
    apellido: reqString,
    usuario: reqString,
    clave: reqString,
    fecha_registro: {
        type: Date,
        required: true,
    },
    ref_carrera: {
        type: Schema.ObjectId,
        ref: 'Carrera',
    },
})

const model = mongoose.model( 'Usuario', usuarioSchema )
module.exports = model