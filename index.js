const imc = require("simple-imc");
const readlineSync = require('readline-sync');

function iniciar(){
   const peso = readlineSync.question('Qual e seu peso? \n');
   const altura = readlineSync.question('Qual e sua altura? \n')
   const result = peso / (altura * altura)
   console.log(result)
   console.log(imc(result))
}

iniciar()