// FOR Loop
for(let i = 0; i <= 10; i++) {  // i++ will add one until it gets to 10
    console.log(i);
}

//While
let i = 0;
while (i < 10) {
    console.log(`While Loop ${i}`);
    i++;
}




const x = 9
;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
};

const addNums = (num1, num2) => num1 + num2;




/*--------------------For loops ----------------------*/


for (let i = 0; i <= 10; i++) {
    console.log('Number' + i);
}


// Nest loops

for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    if (i === 2) {
        console.log(names[i] + ' is the best');
    } else {
        console.log(names[i]);
    }
}


// Break and Continue


//Break statement allows for you to break out of a loop

//  for (let i = 0; i <= 20; i++) {
//    if (i === 15) {
//        console.log('Breaking....')
//        break;
//    }
//    console.log(i);
// }


//Continue 

// for (let i = 0; i<= 20; i++) {
//   if (i === 13) {
//        console.log('Skipping 13...');
//        continue;
//    }
//    console.log(i);
// }




// while-do-while


// let f = 0;

// while ( i = 20) {
//     console.log('Number ' + i);
//     i++;
// }


// Loop over arrays'

const arr = [10, 20, 30, 40];

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Nestomg while loops

while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}


// Do while loop , when you always want teh block of code to atleast run 1 time. 


do {
    console.log('Number ' + i);
    i++;
} while ( i<= 20);





// FizzBuzz Challenge

// for (let num = 0; num <= 100; num++) {

 //   if (num % 3 === 0) {
 //      console.log(`${num} is multiple of 3: Fizz`)
 //   } else if (num % 5 === 0) {
 //       console.log(`${num} is multiple of 5: Buzz`)
 //   } else (num % 5 === 0 & num % 3 === 0); {
 //       console.log(`${num} is a multiple of both 3 and 5: FizzBuzz`)
 //   }

// }



for (let num = 1; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(`${num} is a multiple of both 3 and 5: FizzBuzz`);
    } else if (num % 5 === 0) {
        console.log(`${num} is multiple of 5: Buzz`);
    } else if (num % 3 === 0) {
        console.log(`${num} is multiple of 3: Fizz`);
    } else { console.log(num)}
}


// for-of-loop


// Loop through arrays
const items = ['book', 'table', 'chair', 'kite']
const users = [
    {name: 'Brad'}, {name: 'Kate'}, {name: 'Steve'}
]

for (const item of items) {
    console.log(item);
}


for (const item of items) {
    console.log(users);
}


// Loop over strings

const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}


// Loop over strings

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key,value);
}


// for in loop
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange'
}


for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

//  array  - commonly used to grab key and values. 
const colorArr = ['red', 'green','blue'
]

for ( const key in colorArr) {
    console.log(colorArr[key]);
}



