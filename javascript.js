 //Javascript function borrowing

const person = {
    firstName: 'Catalin',
    lastName: 'Pit',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;

        return fullName;
    }
}

const person2 = {
    firstName: 'Not Catalin',
    lastName: 'Not Pit'
}

console.log(person.getFullName.apply(person2))
