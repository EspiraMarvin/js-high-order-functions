//          JAVASCRIPT ARRAY METHODS

//          slice array method
// returns the selected elements in an array, as a new array object.
// slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument
//Note. The original array will not be changed.

const numbers = [1,2,3,4,5];

const numbers1 = numbers.slice(1,4);

console.log(numbers1);

//last 3 items in the array

const numbers2 = numbers.slice(-3);

console.log(numbers2);

//last item in the array

const numbers3 = numbers.slice(-1);

console.log(numbers3);

//first item in the array

const numbers4 = numbers.slice(0,1);

console.log(numbers4);

// get all items starting from index 1

const numbers5 = numbers.slice(1);

console.log(numbers5)


const participants = ['Florin', 'Ivan',' Liam','Jaia','Patrick'];

//get the first 3 participants

const winners = participants.slice(0,3);

console.log(winners);
