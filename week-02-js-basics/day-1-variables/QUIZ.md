# Day 1 Quiz: Variables & Types

---

## Questions

### 1. What keyword declares a variable that CAN be reassigned?

a) `const`
b) `let`
c) `var`
d) `define`

**Your answer:**

---

### 2. What will this code output?

```javascript
let x = 5;
console.log(typeof x);
```

**Your answer:**

---

### 3. What's wrong with this code?

```javascript
const PI = 3.14;
PI = 3.14159;
```

**Your answer:**

---

### 4. What will this output?

```javascript
console.log("5" + 3);
```

a) 8
b) "53"
c) Error
d) 53

**Your answer:**

---

### 5. Which is a valid template literal?

a) `"Hello, " + name`
b) `'Hello, ${name}'`
c) `` `Hello, ${name}` ``
d) `"Hello, ${name}"`

**Your answer:**

---

### 6. What are the three basic data types we learned?

**Your answer:**

---

## Answers

<details>
<summary>Click to reveal answers (try first!)</summary>

1. **b) `let`** - `let` allows reassignment, `const` does not

2. **"number"** - `typeof` returns the type as a string

3. **You cannot reassign a const** - `const` values are constant and cannot be changed after declaration

4. **b) "53"** - When you use `+` with a string, JavaScript converts the number to a string and concatenates

5. **c) `` `Hello, ${name}` ``** - Template literals use backticks (`) and `${}` for variables

6. **string, number, boolean**

</details>

---

## Self-Assessment

- [ ] I can declare variables with `let` and `const`
- [ ] I know when to use `let` vs `const`
- [ ] I understand strings, numbers, and booleans
- [ ] I can use `typeof` to check types
- [ ] I can use template literals for string interpolation
