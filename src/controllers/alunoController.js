const database = require("../databases/connection")

class alunoController{
   
novoAluno(request, response){
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
    }
module.exports = new alunoController()