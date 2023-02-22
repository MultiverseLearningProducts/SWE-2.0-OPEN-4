//import our class
const Person = require('../Person')

describe('Person class properties and methods behaving the way we expect it to',() => {
    //Making sure the properties are set correctly
    test('name and age property is set correctly',() => {
        //instance of class
        const person1 = new Person('Cory', 21)
        const person2 = new Person('Kat', 21)

        expect(person1.name).toBe('Cory')
        expect(person1.age).toBe(21)
        expect(person2.name).toBe('Kat')
        expect(person2.age).toBe(21)
    })
    //methods are behaving properly
    test('change name method changes name successfully',() => {
        //instance of class
        const person1 = new Person('Cory', 21)
        const person2 = new Person('Kat', 21)

        person1.changeName('Linda')
        person2.changeName('Sonam')

        expect(person1.name).toBe('Linda')
        expect(person2.name).toBe('Sonam')
    })
})