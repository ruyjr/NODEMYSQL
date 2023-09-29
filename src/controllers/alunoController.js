const database = require("../databases/connection") //importando nossa variável de conexão
const path = require('path')

class alunoController{
   
    novoAluno(request, response){

        const number = Math.random()
        response.render(path.join(___dirname, '../view/index.ejs'){variavel: number})

        const {Matricula, Nome, Turma, Email, Genero} = request.body 
        console.log(Matricula, Nome, Turma, Email, Genero)
        
        database.insert({Matricula, Nome, Turma, Email, Genero}).table
        ("ALUNOS").then(data =>{
        console.log(data)
        response.json({message: 'Aluno criado com sucesso!'})
        
        }).catch(error=> {
            console.log(error)
        })
        }
        listarAluno(request, response){
    }
    buscarAluno(request, response){ 
        const id = request.params
        console.log(id)
        database.select("*").table("alunos").where({matricula:id.matricula}).then(aluno=>{ 
            console.log(aluno)
            response.json(aluno)
        }).catch(error=> {
            console.log(error)
        })
        }



module.exports = new alunoController()