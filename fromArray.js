//          JAVASCRIPT ARRAY METHODS

//      from array method ( Array.from() )
// returns an Array object from any object
//Or-> returns a new shallow copied array from an array like or iterable object

// convert a string of numbers to an array of numbers

const str = '1234567'; // to [1,2,3,4,5,6,7]

// const res = Array.from(str, mapFun);
// Or using the arrow function
const res = Array.from(str,x => Number(x));
// or passing Number constructor
// const res = Array.from(str,Number);

/*
function mapFun(x){
    return Number(x);
}
*/

console.log(res);

// removing all duplicate values from the array
const nums = [1,2,3,3,4,5,5,6,6,7];
const peps = ['Florin','Liam','Ivan','Liam','Florin','Florin']; // using strings

const ress = new Set(nums);        //allow creating collections of unique values.
const result = Array.from(new Set(nums));
const results = Array.from(new Set(peps));

console.log(ress);
console.log(result);
console.log(results);