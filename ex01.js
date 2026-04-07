// const readline = require('readline-sync')

// let nome = readline.question("digite o seu nome:")

// console.log(`seu nome è: ${nome}`) 

const readline = require("readline-sync")


let noem = readline.question("informe seu nome:")
let curso = readline.question("informe o curso:")
let idade=readline.questionInt("informe sua idade")

console.log('======= sistema de cadastro=====')
console.log('nome do usuário:${nome}')
console.log('curso do usuário:${curso}')
console.log('idade do usuário:${idade}')