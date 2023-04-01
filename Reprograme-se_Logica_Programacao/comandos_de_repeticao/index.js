var n = 0;
var qtd = 0;
var somaPar = 0;
var somaImpar = 0;


while (qtd < 20) {

  n++;
  for (i = 1; i <= n; i++) {
    if (i == n) {
      var nmrQuadrado = i * n;
      console.log(nmrQuadrado)
      qtd++
    }
  }

  if (nmrQuadrado % 2 == 0) {
    somaPar = somaPar + nmrQuadrado;
  }
  else {
    somaImpar = somaImpar + nmrQuadrado;
  }
}

console.log("A soma de quadrados pares: " + somaPar);
console.log("A soma de quadrados ímpares: " + somaImpar);

