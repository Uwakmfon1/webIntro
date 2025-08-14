console.log('Hello world');

// +, -, *, /, %, ==, ===
// variables definition
// data types 
// keywords

// String, number, boolean, null, undefined, BigInt, Symbol, Object 



let data = {
    "name": "Raymond",
    "occupation": "programmer",
    "gender": "Male",
    "race": "caucasian",
    "nationality": "Nigerian"
}

console.log(data);

let fruits = [
    "apple", "water melon", "pineapple", "mango", "orange", "cucumber", "banana", "strawberry", "Grape", "paw paw", "Avocado", "pear",

    { "name": "Fig", "botanical_name": "botanyy spp", "region_found": "South America" }

];

console.log(fruits[12]['region_found']);

console.log(fruits);
const fruitList = document.getElementById("childList")

for (i = 0; i <= fruits.length; i++) {
    fruitList.innerHTML = fruits;
    i++;
}

// camelCase
// snake_case

// CamelCase

// const MyName = "Etoro";

let YourName = "Lilian";

var MyName = "Goody";

// const name = "David";

// MyName= "Gideon";

let clientName = '';

console.log("Hi " + MyName + ". We are so glad to have you. You'll soon hear from us. Best regards: " + YourName)

let age = null;

age = 23;


console.log(age); 
