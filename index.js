const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API de deliveries",
        
        "mensagem": "Ai que fome!"
    })
})
module.exports = router