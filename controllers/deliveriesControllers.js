const postegres = require('postgres')
const User = require('../models/userSchema')


const createUser =  async (req,res) => {
    const user = new User({
        _id: new postegres.Types.ObjectId(),
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        pesokg: req.body.pesokg,
    })
    const getAll = async (req, res) => {
        const users = await User.find()
        res.json(users)
    }
    
    }
    const deleteUser = async (req, res) => {
        try{    
            const user = await User.findById(req.params.id)
            if(user == null) {
                return res.status(404).json({message: 'Usuário não encontrado!'})
            }
    
            await user.remove()
            res.json({ message: 'Usuário deletado com sucesso!'})
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    
    module.exports = { 
        createUser,
        getAll,
        deleteUser,
 }
