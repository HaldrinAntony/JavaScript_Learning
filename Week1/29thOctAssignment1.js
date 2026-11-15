// let_var_const

var varVal = 10; // Declaring a variable
var varVal = 10; // Re-declaring the variable
var varVal = 20; // Re-assigning the variable
console.log(varVal)

let letVal = 10; // Declaring a variable
// let letVal = 10; // Re-declaring the variable not allowed
 letVal = 20; // Re-assigning the variable is  allowed
console.log(letVal)

const constVal = 10; // Declaring a variable
// const constVal = 10; // Re-declaring the variable not allowed
// constVal = 20; // Re-assigning the variable not allowed
console.log(constVal)

// Scoping - Functionscope
function vScope(){
var vVal=10 //function scope
console.log("Before re-assigning the variable",vVal)
if (true){
    var vVal = 20
    console.log("Reassigning inside a block", vVal)
}
console.log("After re-assigning the variable",vVal)
}
vScope()

//Block Scoped let and const
function lScope(){
let lVal=10 //function scope
console.log("Before re-assigning the variable",lVal)
if (true){
    let lVal = 20
    console.log("Reassigning inside a block", lVal)
}
console.log("After re-assigning the variable",lVal)
}
lScope()

function cScope(){
const cVal=10 //function scope
console.log("Before re-assigning the variable",cVal)
if (true){
    const cVal = 30
    console.log("Reassigning inside a block", cVal)
}
console.log("After re-assigning the variable",cVal)
}
cScope()

//Hoisting
console.log("Before declaring the variable",hoistVar)
var hoistVar = 10;  

// console.log("Before declaring the variable",hoistLet)
// let hoistLet = 10;  

// console.log("Before declaring the variable",hoistConst)
// const hoistConst = 10;  