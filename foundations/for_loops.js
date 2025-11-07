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


//For Loop again
for(let sibling of siblings) {     // this is the same as python - for i in nums 
    console.log(sibling.age);
}

// forEach(just loops through), map(allow a new array from an array) filter(will allow a new array based on a condition)

//forEach
siblings.forEach(function(sibling) {
console.log(sibling.text)
});

//map
const siblingsAge = siblings.map(function(siblings) {
    return siblings.age
});

console.log(siblingsAge);


// filter

const siblingsID = siblings.filter(function(sibling){
    return sibling.id === 2;
}).map(function(sibling){
    return sibling.text
});

console.log(siblingsID);



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
