//1.
// class animal {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let animal1 = new animal ('Max');

// animal1.sayHello()


//2.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`);
//     }
// }

// let person1 = new Person ('John Wick', 35);

// person1.sayHello()

//3.
// class Car {
//         constructor(make, model, year) {
//             this.make = make;
//             this.model = model;
//             this.year = year;
//             }
    
//         startMethod() {
//             console.log(`The ${this.make} ${this.model} is starting`)
//         };
//     }

//     let car1 = new Car ('Toyota', 'Camry', 2000)

// car1.startMethod()


//4.
// class Rectangle {
//     constructor( width, height) {
//         this.width = width;
//         this.height = height
//     }

//     getSurcumference() {
//         console.log(`This rectangles surcumference is ${2 * (this.width + this.height)}`);
//     }
//     getArea() {
//         console.log(`This rectagles area is ${this.width * this.height}`);
//     }
// }

// let rectangle1 = new Rectangle(15, 25)

// rectangle1.getArea()

//5.
//Create a class called Square that extends the Rectangle class and has a sideLength property. Override the getArea method in the 
//Square class to return the area of the square. Create an instance of the Square class and call the getArea method.

// class Square extends Rectangle {
//     constructor(sideLength) {
//         super()
//         this.sideLength = sideLength;
//     }

//     getArea() {
//         console.log(`This square area is ${this.sideLength * this.sideLength}`);
//     }
// }

// let rectangle2 = new Rectangle(15, 25)

// rectangle2.getArea()

// let square1 = new Square(25)

// square1.getArea()


//6.Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, and a deposit method that takes in an amount and adds it to the balance. 
//Create an instance of the BankAccount class and call the deposit method with an amount.

// class BankAccount {
//     constructor(accountNumber, accountHolderName, balance) {
    
//     this.accountNumber = accountNumber;
//     this.accountHolderName = accountHolderName;
//     this.balance = balance;

//     }

//     depositAmmount(amount) {
//        this.balance += amount;
//        console.log(`Deposited: $${amount}`);
//     }

//     displayBalance() {
//         console.log(`Account Balance: $${this.balance}`);
//     }

// }

// bankAccount1 = new BankAccount (3214131231, 'John Snow', 2324);

// bankAccount1.depositAmmount(500)

// bankAccount1.displayBalance()


//7.Create a class called Person that has name and email properties, and a sendEmail method that takes in a message and sends an email to the person's email address. 
//Create an instance of the Person class and call the sendEmail method with a message.

// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     sendEmail() {
//         console.log(`Dear ${this.name},  Please find attached the requested files`);
//     }
// }

// person1 = new Person('John', 'johnwick@gmail.com' );

// person1.sendEmail()

//8.Create a class called Product that has name, price, and description properties, and a discount method that takes in a percentage and returns the discounted price. 
//Create an instance of the Product class and call the discount method with a percentage.

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description= description
    } 


    discount(X) {
        let discountedPrice = this.price - (this.price*(x/100))
        console.log(`Discounted price is $${discountedPrice}`);
    }
}

let discount = 20;
let product1 = new Product ('Table', 100, 'For outdoor patio');
product1.discount(discount)
//Couldnt find the correct way to do it !