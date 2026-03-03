# Day 1: Variables & Types

> Store and name your data. The building blocks of every program.

## Learning Objectives

By end of this session, you will:
- [ ] Declare variables with `let` and `const`
- [ ] Understand JavaScript data types
- [ ] Use `typeof` to check types
- [ ] Know when to use `let` vs `const`

---

## INTRO (15 min)

### What is a Variable?

A variable is a **named container** for data.

```javascript
let greeting = "Hello!";
```

- `let` - tells JavaScript we're creating a variable
- `greeting` - the name we chose
- `=` - assigns the value
- `"Hello!"` - the data we're storing

### Why Variables?

Without variables:
```javascript
console.log("Hello, Cameron!");
console.log("Welcome, Cameron!");
console.log("Goodbye, Cameron!");
// If name changes, edit 3 places!
```

With variables:
```javascript
let name = "Cameron";
console.log("Hello, " + name + "!");
console.log("Welcome, " + name + "!");
console.log("Goodbye, " + name + "!");
// Change once, updates everywhere!
```

---

## BUILD (30 min)

### Exercise 1: Your First Variables

Open the starter file:
```bash
cd week-02-js-basics/day-1-variables/starter
code .
```

Create `script.js`:
```javascript
// My first variables
let myName = "Your Name";
let age = 25;
let isLearning = true;

console.log(myName);
console.log(age);
console.log(isLearning);
```

Run it:
```bash
node script.js
```

---

### Exercise 2: Data Types

JavaScript has several basic types:

```javascript
// String - text in quotes
let text = "Hello, world!";
let anotherText = 'Single quotes work too';

// Number - no quotes needed
let wholeNumber = 42;
let decimal = 3.14;

// Boolean - true or false
let isAwesome = true;
let isBoring = false;

// Log them all
console.log(text);
console.log(wholeNumber);
console.log(decimal);
console.log(isAwesome);
```

Add these to your script and run it.

---

### Exercise 3: typeof

The `typeof` operator tells you what type a value is:

```javascript
let name = "Alice";
let age = 30;
let isStudent = true;

console.log(typeof name);     // "string"
console.log(typeof age);      // "number"
console.log(typeof isStudent); // "boolean"
```

Try it! What does `typeof 3.14` return?

---

### Exercise 4: let vs const

**let** - value can change:
```javascript
let score = 0;
score = 10;  // ✅ This works
score = 20;  // ✅ This works too
```

**const** - value cannot change:
```javascript
const PI = 3.14159;
PI = 3;  // ❌ ERROR! Cannot reassign const
```

Use `const` by default. Use `let` when the value needs to change.

Try this in your script:
```javascript
const birthYear = 1995;
let currentYear = 2026;
let myAge = currentYear - birthYear;

console.log("Age:", myAge);

// Try uncommenting this - what happens?
// birthYear = 2000;
```

---

### Exercise 5: String Concatenation

Combine strings with `+`:

```javascript
let firstName = "Ada";
let lastName = "Lovelace";
let fullName = firstName + " " + lastName;

console.log(fullName);  // "Ada Lovelace"
```

Or use template literals (backticks):

```javascript
let name = "Ada";
let profession = "programmer";

// Template literal with ${} for variables
let bio = `${name} was a ${profession}.`;

console.log(bio);  // "Ada was a programmer."
```

---

### Exercise 6: Type Coercion (Tricky!)

JavaScript sometimes converts types automatically:

```javascript
console.log("5" + 3);    // "53" (string!)
console.log("5" - 3);    // 2 (number!)
console.log("5" * 2);    // 10 (number!)
```

The `+` with strings concatenates. Other operators convert to numbers.

This is why you should be careful with types!

---

### Exercise 7: Build a Profile

Create a complete script that:
1. Stores your information in variables
2. Uses both `let` and `const` appropriately
3. Outputs a formatted profile

```javascript
// Personal info
const name = "Your Name";
const birthYear = 1995;
let currentYear = 2026;
let favoriteColor = "blue";

// Calculated values
let age = currentYear - birthYear;

// Output
console.log("=== My Profile ===");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Favorite Color: ${favoriteColor}`);
console.log(`Birth Year: ${birthYear}`);
```

---

## Quick Reference

```javascript
// Declaring variables
let variableName = value;    // Can change
const CONSTANT = value;      // Cannot change

// Data types
"text"        // string
42            // number
true/false    // boolean

// Check type
typeof value  // returns the type as string

// String concatenation
"Hello, " + name              // with +
`Hello, ${name}`              // with template literal
```

---

## REVIEW (15 min)

### What You Built

You created scripts that:
- Store data in variables
- Use different data types
- Output formatted text

### Explain-Back

1. What's the difference between `let` and `const`?
2. What are the three basic data types we learned?
3. What does `typeof` do?

### Quiz

See [QUIZ.md](./QUIZ.md)

### Preview Tomorrow

Tomorrow: Operators! You'll build a calculator that can:
- Add, subtract, multiply, divide
- Compare values
- Use math to solve problems
