const knex = require('knex')({
    client: 'mysql2',
    connection:{
        host : 'localhost', //por padrão localhost
        user : 'ruyjr', //por padrão root
        password : 'L08r24r06#', //sua senha definida
        database : 'escoladb' //nome do seu banco de dados criado
    }
});
module.exports = knex