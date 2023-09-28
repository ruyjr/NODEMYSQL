const database = require('../databases/connection') // importanto o arquivo de conexão

const express = require('express')

const router = express.Router()

const AlunoController = require('../controllers/alunoController') // importando o controler de a

router.post('/novoAluno', AlunoController.novoAluno) // router.get('/listarAlunos', AlunoController.listarAluno)

// router.get('/buscarAluno/: matricula', AlunoController.buscarAluno)

module.exports = router