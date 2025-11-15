// 1. Create a variable using var to store your name.
var myName = "Jane";

// 2. Create a variable using let to store your age as a STRING.
let age = "19";

// 3. Create a constant PI and try reassigning it.
const PI = 3.1416;
// PI = 3.14; // This will cause an error: "Assignment to constant variable."

// 4. Boolean isStudent: true if age < 25
let isStudent = Number(age) < 25;

// 5. Create an object with nested properties
let person = {
    name: myName,
    age: age,
    student: isStudent,
    address: {
        city: "Davao",
        street: "Example Street",
        zipcode: 8000
    }
};

// 6. Create an array with 5 colors (with at least one duplicate)
let colors = ["red", "blue", "green", "blue", "yellow"];


// -----------------------------
// PART 1: Reverse and Transform
// -----------------------------

let words = ["apple", "banana", "grape", "orange"];
let transformed = [];

for (let word of words) {
    let reversed = "";

    // Manually reverse each string (no .reverse())
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    transformed.push(reversed.toUpperCase());
}

console.log("TRANSFORMED WORDS:", transformed);


// -----------------------------
// PART 2: Filtering and Counting
// -----------------------------

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filtered.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers:`, filtered);
