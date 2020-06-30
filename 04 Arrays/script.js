// var array = [1,2,3];
// console.log(array.length); // 3
// console.log(array[1]); // 2

// var array = [1,2,3];
// array[1] = 100;
// array[3] = 100;
// console.log(array); // 1, 100, 3, 100

// var array = [1,2,3];
// array[5] = 100;
// console.log(array); // 1, 2, 3, undefined, undefined, 100

// var array = [1,2,3];
// array.forEach(function(element) {
//   console.log(element);
// });

// array.push(4);
// console.log(array); // [1,2,3,4]

// var array = [1,2,3,,];

// array.push(4);
// console.log(array);

// var array = [1,2,3,4];

// array.pop();
// console.log(array); // [1,2,3]

// console.log(array.pop()); // [1,2]

// var array = [1,2,3,4];

// console.log(array.shift()); // 1
// console.log(array); // [2,3,4]

// var array = [1,2,3,4];

// array.unshift('new');
// console.log(array); ['new', 1,2,3,4]
// array[array.indexOf('new')] = 'old';
// console.log(array); // ['old', 1,2,3,4]

// var newArray = array.splice(2);
// console.log(newArray); [3,4];

// var array = [1,2,3,4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = array.splice(2, 2); // cut elements from original array oppose to slice method
// console.log(newArray); // [2,3]
// console.log(array) // ['old', 1, 4]

// var array = [1,2,3,4];
// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = array.slice(2, 4); // cut elements from original array oppose to slice method
// console.log(newArray); // [2,3]
// console.log(array) // ['old', 1,2,3,4]

// var array = [1,2,3,4];

// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// console.log(array.filter(function(value){
//   return value > 2;
// })); // [3,4]

// console.log(array.map(function(value) {
//   return value * 2;
// })); // [NaN, 2, 4, 6, 8]
// console.log(array) ['old', 1, 2, 3, 4]
// console.log(array.reverse()); // [4,3,2,1, 'old'];
// console.log(array); // [4,3,2,1, 'old'];reverse changes the array

// var array = [1,2,3,4];

// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = ['join', 'me'];
// console.log(array.concat(newArray)); // ['old', 1, 2, 3, 4, 'join', 'me'];
// console.log(array); // ['old', 1, 2, 3, 4]
// console.log(newArray); // ['join', 'me']

// var array = [1,2,3,4];

// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = ['join', 'me'];
// console.log(array.join(newArray)); // ['oldjoin,me1join,me2join,me3join,me4]; newArray -> join,me => array with one string ['old+join,me+1+join,me...']
// console.log(array); // ['old', 1, 2, 3, 4]
// console.log(newArray); // ['join', 'me']

// var array = [1,2,3,4];

// array.unshift('new');
// array[array.indexOf('new')] = 'old';

// var newArray = ['join', 'me'];
// console.log(array.join(', ')); // "old, 1, 2, 3, 4";
// console.log(array); // ['old', 1, 2, 3, 4]
// console.log(newArray); // ['join', 'me']

// var array = [1,2,3,4];

// console.log(array.reduce(function(total, value) {
//   return total + value;
// }));
// console.log(array); // 10
