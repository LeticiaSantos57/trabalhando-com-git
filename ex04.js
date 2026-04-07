const readline =require ("readline-sync")

let meta =10000


let passos = readline.questionInt("quantos passos você deu hoje?")

let diferencia =meta - passos
 
console.log("====== resultado===")

if(passos >= meta){
    console.log("parabéns!! você atingiu a meta")
    console.log("você atingiu a meta")
    console.log(`VocÊ passou ${Math.abs(diferencia)}`)
}else{

    


        console.log('faltaram ${diferenca{ passos')
    }