/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            JSON 11/07/2025
/-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Use Github public api to use 
api.github.com/users */


const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};


// Conver to JSON string

const str = JSON.stringify(post); // will turn an object into a json string

// Parse JSON

const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];


const str2 = JSON.stringify(posts);
console.log(obj, str2);



/* Strinify or parse. 
stringify and parse is used to send data and also store in local storage , which will store in client on browser(client can only store strings)  */

