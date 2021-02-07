//          JAVASCRIPT ARRAY METHODS

//         includes array  method - determines if an element is included in the array
// This method returns true if the array contains the element, and false if not.

const names = ['Florin','Ivan','Liam'];

//check if we have Ivan in the array

const res = names.includes('Ivan'); //returns true
const ress = names.includes('Patrick'); // returns false

console.log(res);
console.log(ress);

const fruits = ['Apple','Orange','Mango'];
const fru = fruits.includes('Orange');

if (fru){
    console.log('Yuppy!');
}else {
    console.log('Sad..lets buy an orange');
}
