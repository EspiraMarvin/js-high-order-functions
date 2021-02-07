//          JAVASCRIPT ARRAY METHODS

//          splice array method
// method that adds or removes items to or from the array.
//method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const numbers = [1,2,3,4,5];

// removing numbers while adding others in the array
const deleted = numbers.splice(2,3,6,7,8,)
console.log('Deleted Numbers',deleted);
console.log(numbers);


// pushing items into an array without deleting any item
const added = numbers.splice(2,0,12,16,18,)
console.log(numbers);

// pushing items into an array without deleting any item
/*const added = numbers.splice(2,0,12,18,20)

console.log('Added Numbers(Final Array)',numbers)*/
