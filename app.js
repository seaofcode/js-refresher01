// Common Helper Methods
// ---------------------------
// document.write('hello world');
// alert('hellow world');
// console.log('hello world');

// Statements and Comments
// console.log('statement');

// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// let FirstName = "Matthew";
// assign value later, modify existing
// let address, zip, state;
// address = "101 Main Street"

// Numbers are loosely typed
// let number = 40;
// number + 5;
// console.log(number);

// const slices = 10;
// const children = 3;
// const amount = slices % children;

// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;

// console.log(random);
// console.log(random2);

// console.log(amount);

//----------------------------
// Implicit Type Conversion

// let number3 = '10';
// let number4 = '23';

// const result2 = number3 - number4;
// console.log(result2);

// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol(ES6)

// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

//  String
// const text = 'some text';
//  Number
// const number = 45;
//  Boolean
// let value1 = true;
// let value2 = false;
//  Null
// const result = null;
//  Undefined
// let name;

// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof result);
// console.log(typeof name);

// Arrays, Functions, and Objects
// Arrays - [], 0, index based

// const friend1 = 'anna';
// const friend2 = 'bob';
// const friend3 = 'jeff';
// const friend4 = 'sara';

// const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];

// let bestFriend = friends[2];
// friends[4] = 'geno';

// console.log(friends);
// console.log(bestFriend);
// console.log(friends[1]);
// console.log(friends[4]);

// Functions - declare, invoke

// function hello() {
//   // logic
//   console.log('hello there bob');
//   console.log('hello there sara');
//   console.log('hello there jinks');
// }

// hello();

// Function parameters
// when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

// function greet(name) {
//   console.log('Hello there ' + name);
// }

// greet('Bob');
// greet('Anna');
// greet('Jinks');

// Function Return
// example, 1 inch = 2.54cm

// const wallHeight = 80;

// function calculate(value) {
//   const newValue = value * 2.54;
//   return newValue;
//   return value * 2.54; //short hand
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);
// ---------------------------------------
// Function Expression
// expressions - another way to define a function
// creat a variable, assign to FUNCTION not value, use var
// diff - hoisting, use - arrow func, libraries

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// function expression
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue];
console.log(values);
