//          JAVASCRIPT ARRAY METHODS

//           reduce array method
// executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// does not execute the function for array elements without values.

const numbers = [1,2,3,4,5,6];

// const total = numbers.reduce(sum,0); //accumulator is 0
// OR
const total = numbers.reduce(sum);

function sum(accumulator,value) {
    return accumulator + value;
}

console.log(total);

const numberss = [10,2,3,4,5,6,7];

const max = numberss.reduce(callback, -Infinity); //accumulator is -Infinity(the lowest number)

function callback(accumulator,value) {
    if (accumulator > value){  //here the accumulator(-Infinity is not greater than the 1st value 10)
        return accumulator;
    }else
    {
        return value;  // so it returns the value (10) which is stored inside the accumulator
                       // and used in the next iteration
    }
}

console.log(max);

// getting total value of products in a store

const store = [
    {
        product: 'Laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'Desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'Mobile',
        value: 500,
        count: 10
    }
];

const totalValueStore = store.reduce(
    (acc,item) => acc + (item.value * item.count)
    ,0
);

console.log('Total Value of Products in Store =', totalValueStore);
// console.log(totalValueStore);