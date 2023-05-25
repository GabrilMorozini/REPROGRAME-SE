const http = require('http');
const fs = require('fs');
const porta = 443;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });

  if (req.url == '/') {
    fs.readFile('home.html', (err, arquivo) => {
      res.write(arquivo)
      return res.end()
    })
  } else if (req.url == '/proj1') {
    fs.readFile('p1.html', (err, arquivo) => {
      res.write(arquivo)
      return res.end()
    })
  } else if (req.url == '/proj2') {
    fs.readFile('p2.html', (err, arquivo) => {
      res.write(arquivo)
      return res.end()
    })
  } else if (req.url == '/proj3') {
    fs.readFile('p3.html', (err, arquivo) => {
      res.write(arquivo)
      return res.end()
    })
  } else {
    res.write('<h2> PAGINA NAO ENCONTRADA </h2>')
    return res.end()
  }
})

servidor.listen(porta, () => { console.log('Servidor rodadndo') });