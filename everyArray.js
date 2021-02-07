//          JAVASCRIPT ARRAY METHODS

//     every array method - checks if all items in an array pass a test (provided as a function)
// method executes the function once for each item in the array
// it returns true only if the callback function returns a true value for all the items inside the array
// if false value is found it returns a false

const numbers=  [-1,1,2,3,4,5];

const res = numbers.every(isPositive);

function isPositive(item) {
    return item > 0;
}

console.log(res); // returns false since -1 is not a positive number

const persons = [
    {
        name: 'Florin'
    },
    {
        name: 'Ivan'
    },
    {
        name: 'Liam'
    },
    {
        surname: 'Jaia'
    }
];

const result = persons.every(person => person.name !== undefined);
console.log(result) // returns false because of the property(variable) surname in the array, if it were name it would be true

// example check if all items are arrays in an array of arrays

const arrys = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const results = arrys.every(arr => Array.isArray(arr));
console.log(results) // returns true because all items in arrys are arrays