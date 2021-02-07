//          JAVASCRIPT ARRAY METHODS

//      some array method
// checks if any of the item in an array pass a test (provided as a function)
// If it finds an array item where the function returns a true value, some() returns true
// and does not check the remaining values otherwise it returns false

const numbers = [1,2,3,4,5];

//check if one element is greater than 4

const res = numbers.some(greaterThanFour);

function greaterThanFour(item) {
    return item > 4;
}

console.log(res); // returns true // it will return false when we emit no. 5 from the array

// check if one person is an adult
const persons = [
    {
        name: 'Florin',
        age: 25
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 16
    }
];

const ress = persons.some(isAdult);

function isAdult(person) {
    return person.age >= 18;
}
console.log(ress)