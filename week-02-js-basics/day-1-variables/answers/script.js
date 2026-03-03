// Week 2, Day 1: Variables & Types - ANSWERS
// Run this file with: node script.js

// ============================================
// EXERCISE 1: Your First Variables
// ============================================
let myName = "Cameron";
let age = 28;
let isLearning = true;

console.log(myName);
console.log(age);
console.log(isLearning);

// ============================================
// EXERCISE 2: Data Types
// ============================================
let greeting = "Hello, world!";  // string
let score = 100;                  // number
let isComplete = false;           // boolean

console.log("Greeting:", greeting);
console.log("Score:", score);
console.log("Is Complete:", isComplete);

// ============================================
// EXERCISE 3: typeof
// ============================================
console.log("Type of greeting:", typeof greeting);   // string
console.log("Type of score:", typeof score);         // number
console.log("Type of isComplete:", typeof isComplete); // boolean

// ============================================
// EXERCISE 4: let vs const
// ============================================
const birthYear = 1998;
let currentYear = 2026;
let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Current Year:", currentYear);
console.log("Calculated Age:", calculatedAge);

// ============================================
// EXERCISE 5: String Concatenation
// ============================================
let firstName = "Ada";
let lastName = "Lovelace";

// Method 1: Using +
let fullName1 = firstName + " " + lastName;
console.log("Full name (with +):", fullName1);

// Method 2: Using template literals
let fullName2 = `${firstName} ${lastName}`;
console.log("Full name (template):", fullName2);

// ============================================
// EXERCISE 6: Build Your Profile
// ============================================
const profileName = "Cameron Whiteside";
const profileBirthYear = 1998;
let profileCurrentYear = 2026;
let favoriteLanguage = "JavaScript";
let isLearningToCode = true;

let profileAge = profileCurrentYear - profileBirthYear;

console.log("\n=== My Profile ===");
console.log(`Name: ${profileName}`);
console.log(`Age: ${profileAge}`);
console.log(`Birth Year: ${profileBirthYear}`);
console.log(`Favorite Language: ${favoriteLanguage}`);
console.log(`Currently Learning: ${isLearningToCode}`);
console.log("==================\n");
