//          JAVASCRIPT ARRAY METHODS

//     unshift array method (opposite of the push method)
//  Adds one or more items or elements to the beginning of the array and returns the new length of the array
// changes the length of the array directly

const numbers = [1,2,3];

// numbers.unshift(0);
// numbers.unshift(-1);
numbers.unshift(0,-1); // adds -0 first then 0 -- adds from the most right to left

const total = numbers.unshift(); // adds -0 first then 0 -- adds from the most right to left

console.log(numbers);
console.log(total);