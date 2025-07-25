// conditional statements
// if else
// while loops
// for loops
// for in 


// Program to check voting Eligibility
if (age < 18) {
    console.log("This person is not eligible to vote");
} else if (age == 18 || age < 21 && gender == "female") {
    console.log("This person is not eligible to vote");
} else {
    console.log("This person is eligible to vote");
}




// program to check favorite food
let favoriteFruit = prompt("Enter your favorite fruit");
if (favoriteFruit == "water melon") {
    alert("That's my favorite fruit");
} else {
    alert("That is not my favorite fruit");
}




// write a program to return the grades of students from their given scores 
// 90 - 100 - A 
// 80 - 89 - B 
// 70 - 79 - C 
// 60 - 69 - D 
// 59 && below - F  

let score = 72;

if (score >= 90 && score <= 100) { //it checks within range of 90 to 100
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else {
    console.log("F");
}



// a program to asks user for a number and checks if that number is even or odd
let num = prompt("Enter a number");
if (num % 2 == 0) {
    alert("It is an even number")
} else {
    alert("the number is not even")
}

// a program to get 3 inputs and return the largest
// get the 3 inputs fro user 
// store the inputs in a variable
// use if statements to compare which of the three is the greatest

let num1 = prompt("Enter first number");
let num2 = prompt("Enter 2nd number");
let num3 = prompt("Enter third number");

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the greatest");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the greatest");
} else {
    console.log("num3 is the greatest");
}
