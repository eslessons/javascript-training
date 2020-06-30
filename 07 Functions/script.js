// Functions (Advanced)
// Closures

// function generator(input) {
//   var number = input;

//   // closure
//   return function() {
//     return number * 2;
//   };
// }

// var calc = generator(900);
// console.log(calc); // function () { return number * 2 }
// console.log(calc()); // 1800

// Immediately Invoked Function Executions IIFEs

// (function calc() {
//   console.log('Calc');
// })(); // "Calc"

// (function calc() {
//   var number = 10;
//   console.log(number);
// })(); // 10

// console.log(number); // ... number is not defined at ...

// (function calc(input) {
//   var number = input;
//   console.log(number);
// })(10); // 10

// var obj = {};
// (function calc(input) {
//   obj.name = 'Max';
// })(obj);

// console.log(obj); // [object Object] { name: "Max" }

// function message(message) {
//   console.log(message);
//   console.log(arguments);
// }

// message('Hi!', 10); // "Hi!" [object Arguments] { 0: "Hi!"; 1: 10 }
// console.log(message.name); // "message"

// var msg = message;

// console.log(msg.name); // message
// console.log(msg.length) // 1 (n. of expected arguments)

// var msg = function (message) {
//   console.log(message);
// }

// console.log(msg.name); // "" (~ anonymous function)

// function message(message) {
//   console.log(this.name);
// };

// message(); // clg(this.name) -> name of global object
