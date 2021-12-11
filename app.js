const express = require("express")
const app = express()

app.use(express.json())

app.listen(5432,() =>{
    console.log(`servidor rodando` + 5432)
})

const index = require("./routes/index")
const deliveries = require("./routes/deliveriesRoutes")

app.use("/", index)
app.use("/deliveries", deliveries)

module.exports = app


