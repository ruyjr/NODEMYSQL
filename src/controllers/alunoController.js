const database = require("../databases/connection"); //importando nossa variável de conexão
const path = require("path");

class alunoController {
  cadastroAluno(request, response) {
    response.render(path.join(__dirname, "../views/cadastro.ejs"));
  }

  novoAluno(request, response) {
    const { matricula, nome, turma, email, genero } = request.body;
    console.log(matricula, nome, turma, email, genero);

    database
      .insert({ matricula, nome, turma, email, genero })
      .table("ALUNOS")
      .then((data) => {
        console.log(data);
        response.json({ message: "Aluno criado com sucesso!" });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  listarAluno(request, response) {
    database
      .select("*")
      .table("ALUNOS")
      .then((aluno) => {
        response.render(path.join(__dirname, "src/views/listar.ejs"), {
          alunos: aluno,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  buscarAluno(request, response) {
    const id = request.params;
    console.log(id);
    database
      .select("*")
      .table("alunos")
      .where({ matricula: id.matricula })
      .then((aluno) => {
        console.log(aluno);
        response.json(aluno);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new alunoController();
