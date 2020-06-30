// var person = {
//   name: 'Max',
//   "real-age": 27, // "" allow using '-' etc.
//   details: {
//     hobbies: ['Sports', 'Cooking'],
//     location: 'Germany'
//   },
//   greet: function() {
//     console.log('Hello!')
//   },
//   greetName: function() {
//     console.log('Hello, I am ' + name);
//   },
//   greetAge: function() {
//     console.log('Hello, I am ' + age + ' years old');
//   },
//   greetAgeThis: function() {
//     console.log('Hello, I am ' + this.age + ' years old');
//   },
// };

// console.log(person.name); // "Max"
// console.log(person[name]); // "Max"

// var field = 'name';
// console.log(person[field]); // "Max"
// console.log(person.details.hobbie); // ["Sports", "Cooking"]

// person.greet(); // "Hello"

// console.log(typeof person.name); // "string"

// console.log(person["real-age"]); // 27

// person.name = 'Anna';

// console.log(person.name) // "Anna";
// person.greetName(); // "Hello, I am JS Bin Output
// person.greetAge(); // ...age is not defined at...
// person.greetAgeThis(); // "Hello I am 27 years old"

// var anotherPerson = new Object();

// anotherPerson.name = 'Anna';
// anotherPerson.age = 30;
// console.log(anotherPerson); // [object Object] { age: 30, name: "Anna"}

// var person = {
//   name: 'Max',
//   age: 27,
// };

// var person1 = {
//   name: 'Max',
//   age: 27,
// };

// var anotherPerson = new Object();

// anotherPerson.name = 'Max';
// anotherPerson.age = 27;
// console.log(anotherPerson == person); // false
// console.log(person1 == person); // false

// var anotherPerson = Object.create(null);

// anotherPerson.name = 'Anna';
// console.log(anotherPerson); // [object Object] {name: Anna}

// var person = {
//   name: 'Max',
//   age: 27,
// };

// var anotherPerson = Object.create(person);
// anotherPerson.name = 'Anna';

// console.log(anotherPerson.age); // 27

/* Prototypes Introduction */

// var age = 30;

// var person = {
//   name: 'Max',
//   age: 27,
// };

// console.log(person.prototype); // undefined
// console.log(person.__proto__); // sometimes [object Object] {...}
// console.log(person.toString()); // "[object Object]"

// Object.prototype.greet = function () {
//   console.log('Hello there!');
// };

// person.greet(); // "Hello there!"

// var age = 30;

// var person = {
//   name: 'Max',
//   age: 27,
// };

// Object.prototype.greet = function () {
//   console.log('Hello there!');
// };

// var max = Object.create(person);

// console.log(max.name); // "Max"

// max.greet(); // "Hello there" cause of prototype chain

// var anna = Object.create(person);
// anna.name = 'Anna';

// max.greet(); // "Hello there!"
// anna.greet(); // "Hello there!"

// console.log(anna.__proto__ == person); //true
// console.log(anna.__proto__.__proto__ == Object); // true
// console.log(Object.getPrototypeOf(anna) == person); //true

// constructor functions

// function Person() {

// }

// var person = new Person();
// person.name = 'Max';
// console.log(person); // [object Object] { name: "Max" }

// console.log(person.__proto__ == Object.prototype); // false

// console.log(person.__proto__ == Person); // false

// console.log(person.__proto__ == Person.prototype); // true

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var person = new Person('Max', 27);

// console.log(person);

// // Object creation

// // 1

// var person = {
//   name: 'Max',
//   age: 27
// };

// console.log(person instanceof Object) // true

// // 2

// var person = new Object(); // new
// person.name = 'Max';
// person.age = 27;

// // 3

// var person = Object.create(null) // no prototype!
// person.name = 'Max';
// person.age = 27;

// console.log(person.toString()); // false (no obj proto)
// console.log(person instanceof Object) // false

// // 4

// function Person() { // constructor func for Person
//   this.name = 'Max';
//   this.age = 27;
// }

// var person = new Person();

// // this

// function fn(message='') {
//   console.log(message + this);
// }

// fn(); // clg(this) -> window object

// var obj = {
//   obfn: fn
// };

// obj.obfn(); // clg(this) -> object

// obj.obfn.bind(this)() //  clg(this) -> window object

// var person = {
//   name: 'Max'
// };

// obj.obfn.bind(person)(); // [object Object] { name: "Max" }
// obj.obfn.bind(person, 'Hello')(); 
// obj.obfn.call(person, 'Hello'); // calls instantly
// obj.obfn.apply(person, ['Hello'] ); // parameters as Array

// defineProperty method

var account = {
  cash: 12000,
  _name: 'Default';
  withdraw: function(amount) {
    this.cash -= amount;
    console.log('Withdrew ' + amount + ', new cash reserve is: ' + this.cash); // "Withdrew 1000, new cash reserve is: 4000"
  }
};

// Object.defineProperty(account, 'deposit', {
//   value: function(amount) {
//     this.cash += amount;
//   }
// });

// account.deposit(3000);
// account.withdraw(1000);

Object.defineProperty(account, 'name', {
  value: 'ID000-1',
  writable: true, // else you cannot reassign
  // enumerable: true, 
  get: function() {
    return this._name;
  },
  set: function(name) {
    this._name = name;
  }
});

account.name = 'ID000-3';
console.log(account.name)
 