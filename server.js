const express = require("express")
const app = require("../app")

const PORT = 8080

app.listen(8080, ()=>{
    console.log(`Servidor a todo vapor na Porta: ${PORT}`)
})