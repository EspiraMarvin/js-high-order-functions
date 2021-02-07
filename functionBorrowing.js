//Javascript function borrowing

const person = {
    firstName: 'Hazard',
    lastName: 'Pogba',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;

        return fullName;
    }
}

const person2 = {
    firstName: 'Not Hazard',
    lastName: 'Not Pogba'
}

console.log(person.getFullName.apply(person2))

//output
//Not Catalin Not Pit
