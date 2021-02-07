//          JAVASCRIPT ARRAY METHODS

//           filter array method
// creates a new array with all elements that pass the test implemented by the provided function.
// creates a new array and won't modify the original array

const numbers = [1,2,3,4,5,6];

//create an array with only even numbers
const even = numbers.filter(isEven);

function isEven(value) {
    return value % 2 === 0;
}
console.log(even);


//check if the users are adults( above 18yrs)

const people = [
    {
        name: 'Florin',
        age: 26
    },
    {
        name: 'Ivan',
        age: 18
    },
    {
        name: 'Jaia',
        age: 15
    }
];

const adults = people.filter(person => person.age >= 18); //arrow function

console.log(adults);

// removing all the duplicate values from an array
const numbs = [1,2,3,2,1,3,3,5,4,6];

const nums = numbs.filter((value,index,arr) => {
    return arr.indexOf(value) === index;
});

console.log(nums);
