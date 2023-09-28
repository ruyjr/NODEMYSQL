const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes/routes')
const port = 3000
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})

app.get('/', (req, res) =>{
    res.send("Deu certooooooooooo!!!")
})