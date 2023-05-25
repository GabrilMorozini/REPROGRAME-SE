const http = require('http');
const porta = 443;
const formidavel = require('formidable');
const fs = require('fs');
const readline = require('readline');

const servidor = http.createServer((req, res) => {
  if (req.url == '/arquivosEnviados') {
    const form = new formidavel.IncomingForm();
    form.parse(req, (err, campos, arquivos) => {
      const urlAntiga = arquivos.envioArquivos.filepath;
      const novaUrl = './arquivos/' + arquivos.envioArquivos.originalFilename;
      var arquivoLido = fs.readFileSync(urlAntiga);
      fs.writeFile(novaUrl, arquivoLido, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'Text/plain' });
          res.write('Ocorreu um erro');
          console.log(err)
          res.end();
        } else {
          res.writeHead(200, { 'Content-Type': 'Text/html' });
          res.write('Arquivo enviado com sucesso!');
          res.write('<br><br>');
          res.write('Arquivos listados no console!');
          listarArquivos('./arquivos')
          res.end();
        }
      })
    })
  } else {
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'Text/plain' });
        res.write('NÃO FOI POSSIVEL EXIBIR A PÁGINA, TENTE NOVAMENTE!');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'Text/html' });
        res.write(data);
        res.end();
      }
    })
  }
  async function listarArquivos(diretorio, arquivos) {
    if (!arquivos)
      arquivos = []
    let listagemArquivos = await fs.promises.readdir(diretorio)
    console.log(listagemArquivos)
  }
})

servidor.listen(porta, () => {
  console.log('Servidor Rodando');
})