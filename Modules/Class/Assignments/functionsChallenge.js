//1.Write a function that takes in an array of number and returns the sum of all the numbers in the array
// arrayOfNumbers = [ 12, 31, 41, 4, 67, 13];

// function sum(arrayOfNumbers) {
//     let total = 0;
//         for ( let i = 0; i < arrayOfNumbers.length; i++) {
//         let totalIndex = arrayOfNumbers[i];
//         total += totalIndex;
//     }
// return total;
// }
// console.log(sum(arrayOfNumbers));


//2.Write a function that takes in a string and returns the string reversed.

// let name = 'Erblin';

// function reverse(name) {
//     return name.split("").reverse().join("");
// }

// console.log(reverse(name));



//3.Write a function that takes in an array of objects representing people, where each object has properties for
//name, age and gender, and returns an array of objects representing only the people who are over the age of 18

// let people = [
//     {name : 'Erblin', age : 27, gender : 'Male'},
//     {name : 'Melos', age : 26, gender : 'Male'},
//     {name : 'Chriss', age : 16, gender : 'Male'},
//     {name : 'Lucy', age : 18, gender : 'Female'}
// ]

// let adults = people.filter(person => person.age >= 18);

// console.log(adults);


    
//4.Write a function that takes in an array of numbers and returns a new array 
//containing only the even numbers from the original array.

// let numbers = [3, 6 , 10, 54, 102, 23, 9, 4, 16];

// let evenNumbers = numbers.filter(isEven);

// function isEven(value) {
//     return value % 2 === 0;
// }

// console.log(evenNumbers);



//5. Write a function that takes in an array of strings and returns a new array 
//containing only the strings that start with the letter "A".

// let strArr = ['John', 'Andy', 'Moses', 'Alexandra', 'Paul'];

// let startsWithA = strArr.filter((name) => name.startsWith ( "A" ));

// console.log(startsWithA);



//6.Write a function that takes in an array of objects representing books, where each object 
//has properties for title, author, and published, and returns an array of strings representing 
//the titles of all the books published in the year 2000 or later.

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
// ]

// let toDateBooks = books.filter((year) => year.published >= 2000)

// console.log(toDateBooks);
//I couldnt figure out how to return only an array of strings with the titles. Would like to go over it during our session.




//7.Write a function that takes in two numbers and returns the larger of the two.

// let numbers = [15, 75];
 
// largest = numbers.sort((a, b) => a-b).reverse()[0];

// console.log(largest);




//8.Write a function that takes in an array of numbers and returns the smallest number in the array.

// let numbers = [15, 75, 12];

// smallest = numbers.sort((a, b) => a-b)[0];

// console.log(smallest);




//9.Write a function that takes in an array of strings and returns the longest string in the array.

// let strArr = ['banana', 'strawberry', 'apple', 'kiwi'];

// let longestWord = strArr.sort(
//     function (a, b) {
//         return b.length - a.length;
//     }
// )[0];

// console.log(longestWord);



//10.Write a function that takes in an array of objects representing students, where each
//object has properties for name and grade, and returns an array of objects representing
//only the students who have a grade of "A".

let students = [
    {name : 'Ivan' , grade : 'B'},
    {name : 'Jose', grade : 'C'},
    {name : 'Claudia', grade : 'A'},
    {name : 'Paul', grade : 'A'},
];

let gradeAstudents = students.filter((highestGrade) => highestGrade.grade === 'A')

console.log(gradeAstudents);

