// Object Basics

/* Objects are collections of key (property) value pairs.
Property Values can be strings, numbers, booleans, arrays and
functions, however if the property value is a function, it is
called a method.
*/

// object literal syntax, {}
// dot notation

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.age);

const name = person.name;
console.log(name);
person.age = 60;
person.city = 'chicago';
// delete property
delete person.siblings;
console.log(person);
