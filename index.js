
let fruits = [
    "apple", "water melon", "pineapple", "mango", "orange", "cucumber", "banana", "strawberry", "Grape", "paw paw", "Avocado", "pear",
];

const ol = document.getElementById("parentList");

fruits.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
}); 


/* =========== 18/8/25 class ======= **/
// spread operator
let x = ['BMW', 'Toyota', 'Audi', 'Mercedes'];
console.log(...x);
console.log(x);


// Control Flow
// 1. if else statement 

let num =0;
if(num <=1){
    console.log('number is less than 1');
}else {
    console.log('number is greater than 1');
}

// let num1 = prompt('what number?');
if(num <=1){
    console.log('number is less than 1');
}else {
    console.log('number is greater than 1');
}

// Exercise:
// 1. Write a program that asks the user for a number and checks if it is even or odd. (using mod)
// 2. Voting Eligibility : Ask the user for their age. If they are 18 or older → print "You are eligible to vote." else "You are not eligible to vote."
// 3. Write a program that takes a student’s score (0–100) and prints their grade 
/**
 *90–100:A
 *80–89:B
 *70–79:C
 *60–69:D
 *Below 60:F
 */

// 4.Ask the user to enter three numbers using Prompt(). Print the largest number using if...else if...else
// Example: Input: 3, 7, 5 → Output: 7

let navigation = navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});

function getLocation() {
      const output = document.getElementById("output");

      // Check if the browser supports geolocation
      if (!navigator.geolocation) {
        output.textContent = "Geolocation is not supported by your browser.";
        return;
      }

      // Get the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              output.textContent = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              output.textContent = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              output.textContent = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              output.textContent = "An unknown error occurred.";
              break;
          }
        }
      );
    }