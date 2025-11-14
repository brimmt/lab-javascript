/* --------------------------------------------------------------------------
    Functions, Scope & Execution Context  
    Date: 11/07/2025
----------------------------------------------------------------------------*/

/* --------------------------- Basic Functions ----------------------------- */

function sayHello() {
    console.log('Hello World');
}
sayHello();

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(5, 6);

function subtractNumbers(num1, num2) {
    return num1 - num2;
}
const result = subtractNumbers(10, 2);
console.log(result);


/* --------------------------- Default Parameters --------------------------- */

function registerUser(user = 'Bot') {
    return `${user} is registered`;
}
console.log(registerUser());


/* --------------------------- Rest Parameters ----------------------------- */

function sum(...numbers) {
    return numbers;
}
console.log(sum(1, 2, 3));


/* --------------------------- Object Parameters ---------------------------- */

function loginUser(user) {
    return `The user ${user.name} with the id ${user.id} is logged in`;
}

const user = { id: 1, name: 'John' };
console.log(loginUser(user));


/* --------------------------- Array Parameters ----------------------------- */

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/* ----------------------- Global & Function Scope ------------------------- */

const x = 100;
console.log(x, 'in global');

function run() {
    const example = 1;
    console.log(`${example} is local to this function`);
}
run();


/* ----------------------------- Block Scope ------------------------------- */

if (true) {
    const y = 200;
    console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


/* ---------------------- var vs let/const Scope --------------------------- */

if (true) {
    const a = 500;
    let b = 600;
    var c = 700; // var is function-scoped, not block-scoped
}
console.log(c);


/* --------------------------- Nested Scope -------------------------------- */

function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    
    second();
}

first();


/* ------------------ Function Declaration vs Expression 11/13/2025------------------- */

// Declaration (hoisted)
function addDollarSign(value) {
    return '$' + value;
}
console.log(addDollarSign(100));

// Expression (not hoisted)
const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(200));


/* ---------------------------- Arrow Functions 11/13/2025 ----------------------------- */

const add = (a, b) => a + b;
console.log(add(1, 2));

const subtract = (a, b) => a - b;
const double = a => a * 2;

console.log(subtract(10, 5));
console.log(double(4));

// Returning an object
const createObj = () => ({
    name: 'Brad'
});
console.log(createObj());


/* ---------------- IIFE (Immediately Invoked Function) 11/13/2025 -------------------- */

(function () {
    const user = 'John';
    console.log(user);
})();





/* ---------------- Challenege 11/13/2025 -------------------- */

const getCelsius = f => (f - 32) * 5/9

console.log(getCelsius(70));



/*
Challenge 2

**Instructions:**

Create an arrow function called `minMax()` 
that takes in an array of numbers and returns an object 
with the minimum and maximum numbers in the array.



*/

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}



