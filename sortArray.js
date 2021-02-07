//          JAVASCRIPT ARRAY METHODS

//          sort array method -> sorts the items of an array
// sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
//By default, the sort() method sorts the values as strings in alphabetical and ascending order

const names = ['Florin','Liam','Jaia','Ivan'];

names.sort();

console.log(names)

// sorting an array of numbers

const numbers = [74,18,10,5,84,24,105];

numbers.sort(); // [ 10, 105, 18, 24, 5, 74, 84 ]
numbers.sort(compareFunction); // [ 5, 10, 18, 24, 74, 84, 105 ]

console.log(numbers);

function compareFunction(a,b) {
    // 1. < 0 ... a comes first
    // 2. 0 ... nothing will change
    // 3. > 0 ... b comes first

    return a-b;
}

//sorting an array in an ascending order (from lowest in price to highest)

const products = [
    {
        name: 'laptop',
        price: '1000'
    },
    {
        name: 'desktop',
        price: '1500'
    },
    {
        name: 'phone',
        price: '500'
    }
];

// products.sort();
/*products.sort((a,b) => {
    return a.price - b.price;    // asc order (from lowest to highest price)
    // return b.price - a.price;  // desc order(from highest to lowest price)
});*/

products.sort((a,b) => a.price-b.price); //asc
// products.sort((a,b) => b.price-a.price); //desc
console.log(products);