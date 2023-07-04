const Livros = require("../model/livrosModel");

module.exports = class livrosController{

  //CREATE 
  static async livroCreate(req, res){
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let preco = req.body.preco;
    let link = req.body.link;

    const livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
      link: link
    };
    await  Livros.create(livro);
    res.json({message: "Livro cadastrado com sucesso!"});
  }

  //READ - LISTAR 
  static async livroListar(req, res){
    const id_livro = req.params.id;
    if(id_livro){
      const livro = await Livros.findOne({where: {id_livro: id_livro}})
      res.json(livro);
    }else{
      const livro = await Livros.findAll({raw:true});
      res.json(livro);
    }
  }
}