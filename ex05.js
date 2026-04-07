const readline = require ('readline-sync')

let objetivo = 500

let dinheiroGuardado = readline.questionFloat("informe o valor guardado: ")

let diferenca = objetivo - dinheiroGuardado


console.log("=====  RESULTADO =====")
if( dinheiroGuardado >= objetivo){
    console.log("parabéns !! vocễ atingiu a meta ")
}else{
    console.log(`faltaram ${diferenca} para atingir o objetivo`)
}