const database = require('../databases/connection') // importanto o arquivo de conexão
const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

const AlunoController = require('../controllers/alunoController') // importando o controler de a


router.get('/novoAluno', AlunoController.cadastroAluno) 

router.post('/novoAluno', AlunoController.novoAluno) // router.get('/listarAlunos', AlunoController.listarAluno)

// router.get('/buscarAluno/: matricula', AlunoController.buscarAluno)

module.exports = router