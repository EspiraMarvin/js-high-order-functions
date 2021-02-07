//          JAVASCRIPT ARRAY METHODS

//     indexOf and lastIndexof array method
//     indexOf array method
// searches the array for the specified item, and returns its position
// the search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array
// search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array
//      lastIndexOf array method
// searches beginning with the last index in the array

const names = ['Florin','Ivan','Liam'];

const idx = names.indexOf('Ivan');

//replacing index of Ivan which is 1 with name Jay
names[idx] = 'Jay';

console.log(names);

const namess = ['Florin','Ivan','Liam','Ivan','Jay'];
// searches beginning with the last index in the array
const indx = namess.indexOf('Ivan'); // index is 1
const index = namess.lastIndexOf('Ivan'); // index is 3

console.log(indx);
console.log(index);