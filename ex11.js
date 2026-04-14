const readline= require(`readline-sync`)
let tamanhoTotal= 20
qtdbaixado = readline.questionInt("quantos Gb foram baixados?: ")

let percentual = (qtdbaixado / tamanhoTotal ) *100
console.log("=========Resultado========")
console.log(`O usuário baixou ${percentual}%de GB`)