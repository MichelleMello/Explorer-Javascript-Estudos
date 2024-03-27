// Criar um app de frases motivacionais

//função para repetir as frases

//declaration - declaração da função
//function statement 

function createPhrase() {
    //novo escopo aberto pela function

    console.log("Keep going!");
    console.log("Don't give up!");
    console.log("You can do it!");

}

//executar a função - execute, run, call, invoke

createPhrase();
console.log("End of the motivational app");

//function expression - function anonymous

//parâmetros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 25;

//arguments - argumentos
//sum(number1,number2); 

console.log(`The sum is ${sum(number1,number2)}. Number 1 is ${number1} and number 2 is ${number2}.`);

console.log("End of the sum function");

//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = fazerSuco("banana", "maçã");

console.log(copo);

//Function scope
let subject = "create video";

function createThink(subject) {
    return subject = "study";
}

console.log(subject);
createThink();
console.log(subject);


//Function hoisting - elevação

sayMyName();

function sayMyName() {
    console.log("Michelle");
}