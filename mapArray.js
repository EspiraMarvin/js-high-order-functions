//          JAVASCRIPT ARRAY METHODS

// Map array methods (used to iterate over an array and calling function on every element of array)

const numbers = [1,2,3,4,5];

// Map function doesn't change the array which is called upon
// It creates a new array and returns it
numbers.map(double);

// Unless we create a new array numbersDouble
const numbersDouble = numbers.map(double);
const numbersMultiply = numbers.map(multiply);

function double(value,index,arr){
    return value * 2;
}

function multiply(value, index, arr){
    return value * index;
}
console.log(numbers);
console.log(numbersDouble);
console.log(numbersMultiply);

// Getting total product value for each product

const products = [
    {
        name:'laptop',
        price:'1000',
        count: 5
    },
    {
        name:'desktop',
        price:'1500',
        count: 2
    },
    {
        name:'phone',
        price:'500',
        count: 10
    }
];

const totalProductsValue = products.map(item => item.price * item.count);

const totalProductsValuewithName = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));
console.log(totalProductsValue);
console.log(totalProductsValuewithName);

// convert an array of strings of numbers to an array of numbers

const str = ['1','2','3','4'];

const numberss = str.map(Number);
  // OR (Same as)
// const numbers = str.map(item => Number(item));

console.log(numberss);

