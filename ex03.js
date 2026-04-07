const readline = require("readline-sync")

let nome = readline.question("informe seu nome: ")
let jogofavorito= readline.question("informe seu jogo favorito: ")
let pontuacaoAtual= readline.questionInt("informe a pontuação atual: ")

console.log("======== Perfil jogador =====")
console.log(`nome do jogador: ${nome}`)
console.log(`jogo favorito: ${jogofavorito}`)
console.log(`pontuação: ${pontuacaoAtual}`)
