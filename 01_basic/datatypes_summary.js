// Primitive 

// 7 types : String, Number, boolean, Null, undefined, Symbol, Bigint




const score = 100 
const scoreValue= null
let phone;

const Id = Symbol("1234");
const anotherId = Symbol("1234");

console.log (Id === anotherId)

//const bigNumber = 12345678912345678n;


// Reference  (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "nagaraj", " doga"]


let myobj = {
    name : "harekrushna",
    age : 23,

}

const myfunction = function(){
    console.log("Hello world");

}

console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof Id);
console.log(typeof heros);
console.log(typeof myobj);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (primitive), Heap Memory(Non primitive)

let myyoutubechannel = "HarekrushnaGhosh"

let anothername = "myyoutubechannel"
anothername = "Harekrushna"


console.log(myyoutubechannel);
console.log(anothername);


let userOne = {
    Name : "HarekrushnaGhosh",
    email : "ghosharekrishna41@gmail.com",
    UPI: "harekrushnghosh@ybl",

}

let userTwo = userOne
userTwo.email = "harekrushnaghoshh@gmail.com"

console.log(userOne);
console.log(userTwo);




