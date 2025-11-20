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


/* ---------------------------- Functions 11/20/2025 ----------------------------- */


/* ---------------------------- 1 ----------------------------- */
// Correct 
function greet(name) {
    return `Hello ${name}`;
}

/* ---------------------------- 2 ----------------------------- */

// Correct
function register(user = "Guest") {
    return `${user} is registered`
}


/* ---------------------------- 3 ----------------------------- */
// Correct
function double (num) {
    return num * 2
}

// or 

const double2 = (num) => num * 2


/* ---------------------------- 4 ----------------------------- */
// Wrong
function sumAll(...nums) {
    nums.forEach(nums+nums);
}

// Correct version

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}
 // or 

 function sumAll1(...nums) {
    let total = 0;
    nums.forEach(n => total += n);
    return total;
}

// Rewrite until I get it 

function sumAll2(...nums) {
    let total = 0
    nums.forEach( n => total += n);
    return total;
}

/* ---------------------------- 5 ----------------------------- */

// Wrong
function getRandomItem(arr) {
    const getItem = Math.floor(Math.random() * arr.length);
    arr[getItem];
}

// Correct Version

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


/* ---------------------------- Swtiches 11/20/2025 ----------------------------- */


const d = new Date(2020,1,10,8,0,0)
const month = d.getMonth();

switch(month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    default:
        console.log('It is not Jan or March');
}


/* ---------------------------- Truthy & Falsy 11/20/2025 ----------------------------- */

const email = 'test@test.com'  // 

if (email) {
    console.log('You passed in an email');
}

console.log(Boolean(email)) // a string with anything in it is always going to default to true



//Falsy Values
// -false
// - 0
// - '' or empty string
// - null 
// - undefined
// -NaN

const n = false;

console.log (Boolean(x))


/* ---------------------------- Logical Operators 11/20/2025 ----------------------------- */

// && will return first falsy value or the last value 

// || Will return the first truthy value or the last value 
let b;
b = 10 || 20;
b = 0 || 20;

console.log(b);


// ?? - returns the right side operand whent he left is null or undefined.

let c;

c = 10 ?? 20;
console.log(c);

/* ---------------------------- Logical Assignment 11/20/2025 ----------------------------- */

//  || = assigns the right side value only if the left is a falsy value.

let k = false;

if(!k) {
    k = 10;
}

k = k || 10;

k ||= 10  // faster way to do this

// &&= assigns the right side value only if the left is a truthy value.

let l = 20;

if(l) {
    l= 20;
}

l = l && 20; 

l &&= l;

console.log(b);



// ??= assigns the right side value only if the left is null or undefined. 

let o = null;

if (o === null || o === undefined){
    o = 20;
}

o ??= 20;

/* ---------------------------- Ternary Operator 11/20/2025 ----------------------------- */

const age = 19;

// using an if statement

if(age >= 18) {
    console.log('You can vote!');  
} else {
    console.log('You can not vote');
}

// Using a ternary Operator

age >= 18 ? console.log('You can vote!') : console.log ('You cant vote');

// ?  <- if   and : <- else

// Assing a conditional value to a variable using a ternary operator

// const canVote = age >= 18 ? true : false;
// const canVote = age >= 18 ? 'You can vote!': 'You cant vote';

