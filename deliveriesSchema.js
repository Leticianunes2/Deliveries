const postgres = require('postgres')

const User = new postgres.Schema({
    _id: postgres.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    pesokg: {
        type: String,
        required: true

    }
})
module.exports = postegres.model('user', User)