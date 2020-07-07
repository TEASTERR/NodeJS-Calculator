// Calculatrice en CLI avec Commander (Exercice 2)

const commander = require('commander')

commander 
    .option('-a, --addition <number+number>', 'Additon of 2 number')
    .option('-s, --subtration <number-number>', 'Subtrastion of 2 number')
    .option('-m, --multiplication <number*number>', 'Multiplication of 2 number')
    .option('-d, --division <number/number>', 'Division of 2 number')

commander.parse(process.argv)

if(commander.addition){
    let number = process.argv[3].split('+')
    let sum = parseFloat(number[0]) + parseFloat(number[1])
    console.log(sum)
}
if(commander.substraction){
    let number = process.argv[3].split('-')
    let substraction = parseFloat(number[0]) - parseFloat(number[1])
    console.log(substraction)
}
if(commander.multiplication){
    let number = process.argv[3].split('*')
    let multiplication = parseFloat(number[0]) * parseFloat(number[1])
    console.log(multiplication)
}
if(commander.division){
    let number = process.argv[3].split('/')
    let division = parseFloat(number[0]) / parseFloat(number[1])
    console.log(division)
}

//Calculatrice en CLI avec NodeJS "vanilla" (Exercice 2)
let number = process.argv[2].split('+')
let calcul = parseFloat(number[0]) + parseFloat(number[1])
console.log(calcul)

if(process.argv[2].includes('+') == true){
    let number = process.argv[2].split('+')
    let sum = parseFloat(number[0]) + parseFloat(number[1])
    console.log(sum)
}else if(process.argv[2].includes('-') == true){
    let number = process.argv[2].split('-')
    let substraction = parseFloat(number[0]) - parseFloat(number[1])
    console.log(substraction)
}else if(process.argv[2].includes('/') == true){
    let number = process.argv[2].split('/')
    let division = parseFloat(number[0]) / parseFloat(number[1])
    console.log(division)
}else if (process.argv[2].includes('*') == true){
    let number = process.argv[2].split('*')
    let multiplication = parseFloat(number[0]) * parseFloat(number[1])
    console.log(multiplication)
}else{
    console.log("Aucun calcul n'a été mis en parametre")
}

// Addition utilisant les parametres de la commande (Exercice 1)

let number = process.argv[2].split('+')
let sum = parseFloat(number[0]) + parseFloat(number[1])
console.log(sum)