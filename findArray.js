//          JAVASCRIPT ARRAY METHODS

//      find array method
// used to get the value of the first element in the array that satisfies the provided condition
// whichever the first element satisfies the condition is going to print

const names = ['Florin','Ivan','Liam'];

const res = names.find(findIvan);

function findIvan(item) {
    return item === 'Ivan';
}

console.log(res);

//finding one person from an array and returning their details

const persons = [
    {
        name: 'Florin',
        age: 25
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 18
    }
];

const result = persons.find(findFlorin);
const age = persons.find(findFlorin).age;

function findFlorin(person) {
    return person.name === 'Florin'
}

console.log(result);
console.log('Age is', age);