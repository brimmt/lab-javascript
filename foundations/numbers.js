/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Working With Numbers
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let r;

const num = new Number(5);

r=num.toString();

r=num.toString().length;

r = num.toFixed(2);  // Adds decimals

r = num.toPrecision(2);   // rounds to the actual decimal amount

r = num.toExponential(2);

r = Number.MAX_VALUE;

r = Number.MIN_VALUE;

console.log(num);


// Math Object


console.log(Math);

 let b;

 b = Math.sqrt(9);

 b = Math.abs(-5); // finds the absolute. Returns 5

 b = Math.round(4.2) // will return 4

 b= Math.ceil(4.2); // this will always round up. So this will give 5

 b = Math.floor(4.9); // this will round down so it willg give 4. 

 b = Math.min(2,3); // will give the min of numers

 b = Math.random(); // will give me a random decimal

 
 b = Math.random() * 10;  // same as before but multipled by 10 or whatever number I want

 b = Math.floor(Math.random() * 100 + 1);


// Number Challenge
 let c = Math.floor(Math.random() * 100 + 1);
 let k = Math.floor(Math.random() * 100 + 1);


const add_var = c + k;
const diff_var = c - k;
const prod_var = c * k;
const quot_var = c / k;
const remainder_var = c % k;

// Show results
console.log(c, k);
console.log(`${c} + ${k} = ${add_var}`);
console.log(`${c} - ${k} = ${diff_var}`);
console.log(`${c} * ${k} = ${prod_var}`);
console.log(`${c} / ${k} = ${quot_var}`);
console.log(`${c} % ${k} = ${remainder_var}`);