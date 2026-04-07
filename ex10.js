const readline=require("readline-sync")
let totaldepaginas=300
let qtdpaginaslidas= readline.questionInt("informe a quantidade de páginas lidas:")
let percentual=(qtdpaginaslidas / totaldepaginas) *100

console.log("------- RESULTADO------")
console.log (`o usuário leu ${percentual}% do livro`)