// setTimeout(function() {
//   console.log('Finished');
// }, 2000);

// setInterval(function() {
//   console.log('Ping');
// }, 500);

// var interval = setInterval(function() {
//   console.log('Ping!');
// }, 500);

// setTimeout(function() {
//   clearInterval(Interval);
// }, 2500 )

// var a = '5';
// console.log(parseInt(a)); // 5

// var a = 'test';
// console.log(parseInt(a)); // NaN

// var a = 'FBB123';
// console.log(parseInt(a, 16)); // 16494883

// var a = 10;
// console.log(a.toString()); // "10"

// var a = 10.3;
// console.log(a.toFixed()); // "10"
// console.log(a.toFixed(2)); // "10.30"

// var string = 'Any text';

// console.log(string); // "Any text"
// console.log(string.length); // 8 (incl. '_')
// console.log(string[2]); // "y"
// console.log(string.charAt(2)); // "y"
// console.log(string.concat(' add a new string')); // "Any text add a new string"
// console.log(string.toUpperCase()); // "ANY TEXT"
// console.log(string.split(' ')); // ["Any", "text"]

// var stringExtra = "   Any text   "
// console.log(stringExtra.trim()); // "Any text"

// var pi = Math.PI;
// console.log(pi); // 3.1415...

// var e = Math.E;
// console.log(e); // 2.71828...

// var a = -3;
// console.log(Math.abs(a)); // 3

// var a = 1.27;
// console.log(Math.round(a)); // 1
// console.log(Math.ceil(a)); // 2
// console.log(Math.floor(a)); // 1

// var a = 2;
// console.log(Math.exp(a)); // = e^a = 7.389..

// var e = Math.E;
// console.log(Math.log(e)); // 1

// console.log(Math.min(1, 100, 1000)); // 1
// console.log(Math.max(1, 100, 1000)); // 1000

// console.log(Math.random()); // Anything from 0 to 0.9[9]

// var rnd = Math.random() * 100;
// console.log(rnd); // // Anything from 0 to 99.9[9]

// var rnd100 = Math.floor(Math.random() * 100) + 1;
// console.log(rnd100); // Anything from 0 to 100

// var today = new Date();
// console.log(today); // [object Date] { ... }
// console.log(today.toString()); // author's time "Tue 07 2016 10:..."

// var today = new Date(2016, 5, 26);
// console.log(today.toString()); // "Sun 26 2016 00:... "

// var today = new Date(2016, 11, 32); // 32 ! => + 1
// console.log(today.toString()); // "Sun Jan 01 2017 00... "

// var today = new Date('2016/05/20');
// console.log(today.toString()); // "Fri May 20 2016 ... "

// console.log(Date.parse('2016/05/20')) // ms from 01.01.1970;

// var today = new Date();

// console.log(today.getDate()); // 7
// console.log(today.getDay()); // day from sunday

// var string = 'abc';
// var pattern = /ab/;
// console.log(pattern.exec(string)); // ["ab"]
// console.log(pattern.exec(/aa/)); // null

// var string = 'abab';
// var pattern = /ab/;
// console.log(pattern.exec(string)); // ["ab"]
// console.log(pattern.test(string)); // true

// console.log(string.match(pattern)); // ["ab"]
