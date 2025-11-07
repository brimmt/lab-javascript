/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            Functions, Scope & Execution Context 11/07/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function sayHello() {
    console.log('Hello World');
};

sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
};


add(5,6);


function subtract (num1,num2) {
    return num1 - num2;
};

const result = subtract(10,2);
console.log(result);




// Default Parameters

function registerUser(user) {     // This variable is local var within the function. It is not a function. Could set parameters also within the function variables to avoid the if statement
   if (!user) {
        user = 'Bot';
    }
    
    return user + 'is registered';
};




console.log(registerUser());


// Rest Params

function sum(...numbers) {
    return numbers;
};

console.log(sum(1,2,3));



// Object as params

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
    
    }

    const user = {
        id: 1,
        name: 'John'
    };

    console.log(loginUser(user));


// Arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10]);




// Global & Function Scope


const x = 100;
console.log(x, 'in global');

function run() {
    const example = 1;
    console.log(`${example} is local to this function`);
}

run();   // Global scope can be called from within functions and outside of functions. Local scope can only be called within the function. 


// Block Scope


if (true) {
    const y = 200;
    console.log(x+y);

}
/*
console.log(x + y);   <- this will not work since y is defined within the function
*/


for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// How var is used

if (true) {
    const a = 500; // can't be called globally
    let b = 600;  // cant be called globally
    var c = 700; // I can call this globally. var is not block scoped. It is function scoped
}

console.log(c);






// Nested Scope

function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    second();
}

first();

