const readline = require("readline-sync")

let objetivos =40
let metaDeEstudos = readline.questionFloat(" informe quantidade de hora")


let diferenca = objetivos - quantidadedehora

console.log ("===== RESULTADO=====")

if(metaDeEstudos >= objetivos){
    console.log ("parabéns !! você atingiu a meta")
 }else{

 }console.log(`faltaram ${diferenca} para alcancar a meta`)