/* Logic-Control-Flow 11/14/2025 */

// If statements


if (true) {
    console.log('This is true')
}


let x = 10
let y = 15

if (x === y){
    console.log(`hi im learning ${x,y}`)
}


/* -----------------------------------------------------------------------*/
// Else if 

const d = new Date(10, 30, 2022, 8, 0, 0); // sets to specific date
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}


//Nested if

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake up')
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Night');
}

// Switches