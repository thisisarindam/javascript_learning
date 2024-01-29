// Primitive Datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
// defining symbol
const id = Symbol('123')
const anotherId = Symbol('123')
//despite passing same value but symbol make it unique
//console.log(id === anotherId); //returns false means they are not same value, this is the work of symbol

const bigNumber = 368163781436814368n //asssign "n" represents bigInt


// Reference Datatype (Non Primitive)
// Arrays, Objects, Functions

//arrays
const heros = ["shaktiman", "naagraj", "doga"];
//objects
let myObj = {
    name: "Arindam",
    age: 30,
    location: "kolkata",
};
//function
const myFunction = function(){
    console.log("hello world");
}

