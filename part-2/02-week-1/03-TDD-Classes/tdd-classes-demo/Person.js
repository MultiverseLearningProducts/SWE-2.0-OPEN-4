//Class - In JS is a way to create objects that share common properties and methods

//You can think of a class as a blueprint/template that can help you create objects that have prefixed properties and functions

//{name: ???, age: ???}
//define your class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //method
    changeName(newName) {
        this.name = newName 
    }

    doubleAge() {
        this.age = (this.age * 2)
    }
}

// //create an instance of the class
// const person1 = new Person('Gabriel', 21)
// const person2 = new Person('Ciara', 22)

// console.log('BEFORE', person1)
// //console.log(person2)

// //to use a method in a class
// person1.changeName('Fatima')
// person1.doubleAge()

// console.log('AFTER', person1)

module.exports = Person

