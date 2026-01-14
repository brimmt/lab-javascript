// console.log(window)
// console.log(document.body.innerText)


let output;

// output = document.all;
output = document.head;
// output = document.domain;

console.log(output);




// document.getElementById()
console.log(document.getElementById('shoppingList'))

console.log(document.getElementById('addBtn').getAttribute('id'));


// Set attributes
// Can see the actual updates in the browser. Really cool to come back to this
document.getElementById('shoppingList').title = 'Shopping List';
document.getElementById('shoppingList').setAttribute('class', 'title');


// To avoid typing this out more than once we can set it in a variable
const title = document.getElementById('shoppingList');

// Get /change content
console.log(title.textContext)
title.textContent = 'Hello World';
title.innterText = 'Hellow Again';
title.innerHTML = '<strong>Shopping List</strong>'


// Change styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.borderRadius = '10px';

// Good for dynamic pages


// document.querySelector()

console.log(document.querySelector('h1'));  // would only pull 1 h1 if multiple is on the page
console.log(document.querySelector('.container')); // i dont have any id called container but it would pull that
console.log(document.querySelector('input[type="text"]'));


//Sudo selecter

console.log(document.querySelector('li:nth-child(2)'));






