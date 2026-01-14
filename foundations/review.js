/* ----------------------------------------------------------
   SECTION 1: Basic Review
----------------------------------------------------------- */

// Array Methods
const arr = [10, 20, 30];
arr.push(40);
arr.shift();
console.log(arr);   // [20, 30, 40]


// Object Manipulation
const user = {
  name: 'Bella',
  age: 20
};

user.age = 30;
delete user.name;
console.log(user);  // { age: 30 }


/* ----------------------------------------------------------
   SECTION 2: Functions & Loops Practice
----------------------------------------------------------- */

// Get Even Numbers
const nums = [12, 5, 20, 7, 30];

function getEvens(arr) {
  const evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  console.log(evens);
}

getEvens(nums);  // [12, 20, 30]


// Count numbers > 10
const numbers = [2, 12, 4, 25, 7, 30];
let count = 0;

for (let num of numbers) {
  if (num > 10) {
    count++;
  }
}

console.log(count);  // 3


// Get Odd Numbers
const numbers1 = [3, 4, 11, 12, 17, 20];
const oddNumbers = [];

for (let num of numbers1) {
  if (num % 2 !== 0) {
    oddNumbers.push(num);
  }
}

console.log(oddNumbers);  // [3, 11, 17]


// Minimum Value Function
function minimumValue(arr) {
  let smallest = arr[0];
  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
}

console.log(minimumValue([1, 2, 6, 8, 9, 3, 5])); // 1


// Sum of Even Numbers
function sumOfEven(arr) {
  let total = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      total += num;
    }
  }
  return total;
}

console.log(sumOfEven([5, 20, 7, 12, 19])); // 32


/* ----------------------------------------------------------
   SECTION 3: forEach Practice
----------------------------------------------------------- */

const nums1 = [1, 2, 3, 4, 5, 6, 7, 11];

// Log each number
nums1.forEach(num => console.log(num));

// Log number + index
nums1.forEach((num, index) => console.log(num, index));

/*
Pattern to remember:

array.forEach(item => {
  if (condition) {
    // do something
  }
});
*/

// Filter >10 using forEach
const greaterThanTen = [];

nums1.forEach(num => {
  if (num > 10) {
    greaterThanTen.push(num);
  }
});

console.log(greaterThanTen); // [11]


/* ----------------------------------------------------------
   SECTION 4: map Practice
----------------------------------------------------------- */

// Double values
const doubles = nums1.map(num => num * 2);
console.log(doubles);

// Uppercase names
const names = ['bella', 'sam'];
const upper = names.map(name => name.toUpperCase());
console.log(upper);

// Extract ages
const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 }
];

const peopleAge = people.map(person => person.age);
console.log(peopleAge);


/* ----------------------------------------------------------
   SECTION 5: filter Practice
----------------------------------------------------------- */

// Filter by name
const findName = people.filter(person => person.name === 'B');
console.log(findName);

// Filter odd numbers
const testNumbers = [1, 2, 3, 5, 7, 22];
const oddNums = testNumbers.filter(num => num % 2 !== 0);
console.log(oddNums);


