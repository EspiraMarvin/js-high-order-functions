//          JAVASCRIPT ARRAY METHODS

//          concat array method  - joins two or more arrays.
// method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

const a = [1,2,3];
const b = [4,5,6];
const d = [7,8,9];

const c = a.concat(b);
// c.push(4);

// adding another array
const e = a.concat(b,d);

//using concat method as a push method
const f = a.concat(1,2);
const g = a.concat(1,2,a);

console.log(c);
console.log(e);
console.log(f);
console.log(g);
