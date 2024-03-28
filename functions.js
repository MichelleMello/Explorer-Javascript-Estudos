// Create an app of motivacional phrases

//Function to repeat the phrases

//declaration - declaração da função
//function statement 

function createPhrase() {
    //New scope opened by the function

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

//Example: function is a blender

function makeJuice(fruit1, fruit2) {
    return fruit1 + fruit2;
}

const glass = makeJuice("banana", "apple");

console.log(glass);

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

//arrow function

const sayMyName = () => {
    console.log("Michelle");
}

sayMyName

//Function() constructor
//Create a new object

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " is walking";
    }
}

const michelle = new Person("Michelle");