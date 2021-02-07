//          JAVASCRIPT ARRAY METHODS

//         reverse array method -used to reverse an array
// the first element becomes the last element and vice versa

const numbers = [1,2,3,4,5];

numbers.reverse(); //[5,4,3,2,1]

//if you don't want to change the original array

// const newArr = numbers.concat().reverse();
// or use the spread operator instead of concat
const newArr = [...numbers].reverse();

console.log(numbers);
console.log(newArr);

//reverse characters inside a STRING

const str = 'Coding is Fun!';

const res = str.split('').reverse().join('');
// Or use spread operator instead of split
// const res = [...str].reverse().join('');

console.log(res);
