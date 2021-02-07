//          JAVASCRIPT ARRAY METHODS

//          fill array method -  fills the specified elements in an array with a static value
// You can specify the position of where to start and end the filling
// If not specified, all elements will be filled
// Note: this method overwrites the original array

const numbers = [1,2,3,4,5];

const num1 = numbers.fill(0);

//specifying the start and end position
const numberss = [1,2,3,4,5];

const num2 = numberss.fill(0,1,4)
console.log(numbers);
console.log(num1);
console.log(num2);

// array to have a number from 0 to M

function fillInNumbers(n) {
    return Array(n)
        .fill(0)
        .map((_,idx) => idx + 1);
}

console.log(fillInNumbers(10));

