const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes/routes')
const port = 3001
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(router)
app.set('view engine','ejs')

app.get('/', (req, res) =>{
    const number = Math.random()
    res.render(path.join(__dirname, 'src/views/index.ejs'),{variavel: number})
})

app.listen(port,()=>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})