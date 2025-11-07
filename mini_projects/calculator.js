/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            Calculator Mini-Projects 11/07/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const readline = require('readline')



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter a number: ', (num1) => {
    rl.question('Enter another number:',(num2) => {
        rl.question('Enter Operator (+ - * /): ', (opp) => {
            
            let result;


            if (opp === '+') {
               result = Number(num1) + Number(num2);
            }
               else if (opp === '-') {
                result = Number(num1) - Number(num2)
               }
               else if (opp === '*') {
                result = Number(num1) * Number(num2)
               }
               else if (opp === '/') {
                if (Number(num2) === 0) {
                    console.log("Error: Division by zero not allowed.")
                    rl.close();
                    return;
                }
                result = Number(num1) / Number(num2)
               } else {
                console.log("Invalid operator.");
                rl.close();
                return;
               }

               console.log(`Result: ${result}`);
               rl.close();
        });
    });
});
           

/* Always use === for strict comparison. 
   Close rl  ( rl.close(); ) <- or node will be left hanging
   Use prompt <- when running this in the browser (live server)
*/


 


