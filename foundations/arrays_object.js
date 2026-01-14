

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Working With Arrays & Objects 11/02/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/






/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    Array Literal
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

 let x;

const nums = [12, 14, 23, 34];
const mixed = [12, 'Hello', true, null]



 //Array Constructor

 const fruits = new Array('apple','grape','orange');

 x = nums[0];

 x = nums[0] + nums[3];

 x = `My favorite fruite is ${fruits[2]}`; 

x = nums.length;

fruits[0] = 'pear';

x = fruits;

fruits[fruits.length] = 'blueberry';


 console.log(x);


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Basic Array Method
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

 const arr = [34, 55, 95, 20 ,15];
let y;



 arr.push; // This adds on to the array

 arr.pop; // this removes from the end

 arr.unshift(99);  // adds to the zero index

 arr.shift(); // removes the zero index

 // arr.reverse(); // reverse the array


 // These methods will pull from the array
 
 y = arr.includes(20); // returns a boolean if the item is found in the list
 
 y = arr.indexOf(15); //provides index of the item in the array. If if doesn't exist you will get a -1
 
// y = arr.slice(1);  // slices starting from index provided

// y = arr.splice(1, 4);  // this actually removes and manipulates the array

 y = arr.splice(1,4).reverse().toString().charAt(0);


 console.log(y, arr);



/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    Nesting Concat Spread
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

 const fruit = ['apple', 'pear', 'orange'];
 const berries = ['strawberry', 'blueberry', 'rasberry'];

 let f;

 fruit.push(berries);

 f = fruit[3][1];

 const allFruit = [fruit, berries];

 f = allFruit[1][0];

 f = fruit.concat(berries); //this adds to the array and everything is on the same level




// Spread Operator (...)

f = [...fruit, berries];  // spreads items accross in an array




// Flatten Arrays

const flat = [1,2,[3,4], 5, [6,7], 8];

f = flat.flat();  // this will make it into one same level array




// Static Methods on Array Opjects

f = Array.isArray(); // this checks if something is an array. Returns boolean

f = Array.from('12345'); //This will give an array

const a = 1;
const a1 = 2;
const a2 = 3;

f = Array.of(a, a1, a2);  // this will crate an array from a set of values
 
console.log(f)



/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    Array Challenges
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Challenge 1 
                Use some of the array methods that we looked at to mutate the following array to = the expected result below:   
                                                    const exp = [1,2,3,4,5];

                                                    Expected Results:

                                                    conole.log(exp);

                                                    [6,5,4,3,2,1,0];                  
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const exp = [1,2,3,4,5];

exp.reverse().push(0);
exp.unshift(6);

console.log(exp)




/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Challenge 2 - Combine arr1
                                       Combine exp1 and exp2 into a new array called exp3 with the following elements                      
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const exp1 = [1,2,3,4,5];
const exp2 = [5,6,7,8,9,10];

let exp3;

exp1.pop();

exp3 = exp1.concat(exp2);

console.log(exp3);





/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Working With Object Literal - Key Value Pairs
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let p;


const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
};

p = person.name; 
p = person.address.state;


delete person.age;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);  //this keyword
};

person.greet();

console.log(p);


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            Object Operators and Methods 11/07/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


let t;

const todo = {};

// const todo = new Object()   this is also another way to create a literal

todo.id = 1;

t = todo;
todo.name = 'Buy Milk';
todo.completed = false;

t = todo;


// nesting review

const people = {
    address: {
        coords: {
            lat: 42.000,
            lng: -71.000,
        }
    }
};

t = people.address.coords.lat;

// Spread review

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};
// const obj4 = Object.assign({}, obj1, obj2);  // this was the method before spread operator was introduced. 
t = obj3;


const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'Pickup kids from school'},
    { id: 3, name: 'Take out trash'},
];


t = todos[0].id;

t = Object.keys(todo);  // since it turns it into an array you can do .length

t = todo.hasOwnProperty('name')  // returns a boolean. in this case true will be returned


console.log(t);


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            Destructuring & Naming 11/07/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// because the variables are already created we can add them to an object as keys with no value listed. 
const user = {
    firstName,
    lastName,
    age,
};

console.log(user.age)


// Destructuring

const list = {
    id: 1,
    title: 'Take out trash',
    her: {
        name: 'Bella',
    }
};


const { id, title, her} = list;


console.log (id, her);


// Destructuring arrays


const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers; // pulls the first and second elements in an array. You can use the '...' <- rest operator in this case to pull the rest of the elements

console.log(first, second, rest);  




/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            FInal Object Challenge 11/07/2025
                                                            Reference object-challenge.md
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Ran out of time. Will continue on the weekend. 