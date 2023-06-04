const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err) =>{
  if(err){
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados escola com sucesso!')

  db.run("create table aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
});

db.run("insert  into aluno(matricula, nome, email, cidade) values (2021225623,'Gabriel','gabriel@gmail.com','Vargem Alta')");
db.run("insert  into aluno(matricula, nome, email, cidade) values (2021224424,'Ana da Silva','anasilva@gmail.com','Cachoeiro de Itapemirim')");
db.run("insert  into aluno(matricula, nome, email, cidade) values (2021324425,'Jośe Alves','josealves@gmail.com','Vitória')");

db.each('select matricula, nome from aluno', (err, row) =>{
  if(err){
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
})
