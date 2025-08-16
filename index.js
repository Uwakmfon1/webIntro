

console.log(data);

let fruits = [
    "apple", "water melon", "pineapple", "mango", "orange", "cucumber", "banana", "strawberry", "Grape", "paw paw", "Avocado", "pear",
];

const ol = document.getElementById("parentList");

fruits.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
}); 

let num1 = 32;

while(num1 >=32 && num1 <=40)
{
    console.log(num1);
    num1++;
}

console.log("active")