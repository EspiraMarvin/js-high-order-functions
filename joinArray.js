//          JAVASCRIPT ARRAY METHODS

//         join array  method - join the elements of an array into a string
// The elements of the string will be separated by a specified operator or its default value which is a comma(,)

const countries = ['Romania','USA','India'];

const res = countries.join(); //default separator will be used a comma
const ress = countries.join(' - '); //specifying separator using a dash -
const resss = countries.join(''); //without using any separator

console.log('I want to visit', res);
console.log(ress);
conso