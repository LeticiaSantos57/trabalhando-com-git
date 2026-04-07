
const readline =require('readline-sync')

let nome = readline.question("informe seu nome:")
let nomedoprato=readline.question("informe o nome do prato:")
let valorDoprato=readline.questionFloat("informe o valor do prato:")

console.log("======= Resumo Do Pedido ======")
console.log(`cliente:$ {nome}`)
console.log(`Prato escolhido: $ {nomeDoPrato}`)
console.log(`valor: ${valorDoprato}`)