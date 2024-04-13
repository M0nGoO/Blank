//1. Write a function that takes an array of objects representing books 
//and returns an array containing the titles of those books.

// let books = [ 
//     {
//         title : 'A brief history of Time', 
//         author : 'Stephen Hawking', 
//         published :  '1988'
//     },
//     {
//         title : 'Slt Houses',
//         author : 'Hala Alyan',
//         published : '2017'
//     },
//     {
//         title : 'The Five',
//         author : 'Hallie Rubenhold',
//         published : '2019'
//     }
// ];

// let bookTitles = books.map((book) => {
//     return book.title
// })

// console.log(bookTitles);

//2. Write a function that takes an array of objects representing products and 
//returns an array containing only the products that are currently in stock.

// let products = [
//     {name : 'apple', price : '32', status : 'in stock'},
//     {name : 'banana', price : '12', status : 'in stock'},
//     {name : 'kiwi', price : '24', status : 'out of stock'},
//     {name : 'orange', price : '15', status : 'out of stock'}
// ];

// let inStockProducts = products.filter((product) => {
//     return product.status === ('in stock')
// });

// console.log(inStockProducts);


//3. Write a function that takes an array of objects representing users 
//and returns the first user whose email address matches a given email.

// let users = [
//         {id: 1, username : 'alice', email : 'alice@example.com'},
//         {id: 2, username : 'bob', email : 'bob@example.com'},
//         {id: 3, username : 'charlie', email : 'charlie@example.com'},
//         {id: 4, username : 'dave', email : 'dave@example.com'},
//         {id: 5, username : 'pete', email : 'pete@example.com'}
//     ];

//     let userEmail = users.filter((user) => {
//         return user.email === 'dave@example.com'
//     });

//     console.log(userEmail);



    //4.Write a function that takes an array of objects representing tasks and returns true
    //if all the tasks are marked as complete, otherwise returns false.

    // let tasks = [
    //     {task : 'Launch buyer personas', Status : 'Complete'},
    //     {task : 'Implement Project Management system', Status : 'Incomplete'},
    //     {task : 'Spring Release Campain', Status : 'Complete'},
    //     {task : 'Generate 400 leads', Status : 'Incomplete'}
    // ]

    // let completeTasks = tasks.map((task) => {
    //     return task.Status === ('Complete')
    // });

    // console.log(completeTasks);

//*************************************************************************************
    //5.Write a function that takes an array of objects representing purchases 
    //and returns the total amount spent on those purchases.

    // let purchases = [
    //     {item : 'shoes', price : 95},
    //     {item : 'pants', price : 50},
    //     {item : 'shirts', price : 35}
    // ];

    // let total = 0
    // let totalAmount = purchases.reduce((amount) => {
    //     return amount
    // })

    // console.log(totalAmount);

// for(let productInfo of products) {
    //          total += productInfo.price

    //was not able to do it!
//*********************************************************************
//6.Write a function that takes an array of numbers as input and returns the sum 
//of all the numbers in the array.

// let numbers = [32, 45, 52, 12 ,23];

// let sum = numbers.reduce(function(a, b) {
//     return a + b;
// }, 0)
// console.log(sum);

//7.Write a function that takes an array of strings as input and returns a 
//new array with all the strings converted to uppercase.

// let strings = ['football', 'basketball', 'tennis', 'baseball'];

// let uppercaseString = strings.map((string) => {
//     return string.toUpperCase()
// })

// console.log(uppercaseString);


//8.Write a function that takes an array of numbers as input and returns a new array with all the even 
//numbers from the original array.

// let numbers = [32, 34, 43, 12, 11, 3, 1, 9];

// let evenNumbers = numbers.filter((even) => {
//     return even % 2 === 0;
// })

// console.log(evenNumbers);


//9.Write a function that takes an array of strings as input and returns a new array with all the 
//strings that have a length of 4 or less.

// let arr = ['okay', 'problem','keyboard', 'lime', 'np'];

// let shortArr = arr.filter((word) => {
//     return word.length <= 4
// })

// console.log(shortArr);