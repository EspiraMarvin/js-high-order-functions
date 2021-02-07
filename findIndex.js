//          JAVASCRIPT ARRAY METHODS

//      findIndex array method
// executes the function once for each element present in the array
// If it finds an array element where the function returns a true value
// it returns the index of that array element
// and does not check the remaining values

const numbers = [1,2,3,4,5];

const res = numbers.findIndex(findThree);

function findThree(value) {
    return value === 3;
}
console.log(res); // index of item 3 is 2