// Employees
// let Employees = {
//     name : 'Jim Carry',
//     age : 27,
//     salary : '$60,000',
//     jobTitle : 'Store Manager',


//     work : function() {
//         console.log('time to work');
//     },
//     break : function() {
//         console.log('take a break')
//     },
//     attendMeeting : function() {
//         console.log('attend a meeting');
//     }
// }
// Employees.gender = 'Male'



// //Bank Accounts
// let bankAccounts = {
//     accountNumber : '1321541231',
//     balance : '$25,000',
//     accountType : 'Savings account',

// withdraw : function() {
//     console.log('withdraw money');
// },
// deposit : function() {
//     console.log('deposit money');
// },
// transfer : function() {
//     console.log('transfer money');
// }
// }


// //Dogs
// let dogs = {
//     breed : 'Samoyed',
//     age : 8,
//     color : 'white',

//     bark : function() {
//         console.log('hau hau');
//     },
//     wagTail : function() {
//         console.log('tail wagging');
//     },
//     fetch : function() {
//         console.log('fetching');
//     }
// }


// //CANNOT ADD WHEN I PUT $ SIGN TO PRICE
// let newProducts = {
//     name : 'Shampoo',
//     price : 32,
//     manufacturer : 'Company',
//     category : 'Dry Hair'
// }

// newProducts.description = 'For men'
// newProducts.price = newProducts.price + 10;
// delete newProducts.description
// console.log(newProducts);



let blogPosts = [
    {
        title : 'The importance of Regular Exercise',
        author: 'John Doe',
        date : '2022-02-28',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        title: 'Tips for Eating Healthy on a Budget',
        author: "Jane Smith",
        date: '2022-02-15',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    }
];

let isEmpty = blogPosts.date

if(typeof isEmpty === "field" && isEmpty.length === 0) {
    console.log("The field is empty");
} else if ( isEmpty === null) {
    console.log("The field is null");
} else {
    console.log("The field is not empty or null");
}

    