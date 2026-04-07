const readline= require("readline-sync")

let nota =readline.questionFloat("informe sua nota: ")

if(nota >=7){
    console.log("aprovado")
}else{
    console.log("reprovado")
}