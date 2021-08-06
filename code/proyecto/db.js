const db = require('mongoose')

db.Promise = global.Promise

async function conectar(uri) {
    await db.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        dbName:'vcs'
    })
    .then((data) => {
        console.log('[db] - Conexión exitosa.')
    })
    .catch((error) => {
        console.log('[error log] - ' + error)
    })
}

module.exports = conectar