         // JAVASCRIPT ARRAY METHODS

//             forEach Array Method
//   (method calls a function once for each element in an array, in order.
//   Note: the function is not executed for array elements without values.)

const numbers = [1,2,3,4,5,10];

numbers.forEach(consoleItem);

function consoleItem(item,index,arr){
    console.log('a[' + index + '] = ' + item);
    // console.log(item);
}

//  Arrow function
numbers.forEach((item, index, arr) => {
    // console.log('a[' + index + '] = ' + item)
    console.log(arr) //output the array
});

// calculate sum of numbers from the array

let sum = 0;

numbers.forEach(item => {
    sum += item;
});

console.log(sum);

// Check how many times a letter appears in an array

const letters = ['a','b','c','a','b','c','a','d'];

let count = {};

letters.forEach(item => {
    if (count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);
