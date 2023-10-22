const person = {
    name: 'Ashish',
    walk() {},
    talk() {
        console.log('--x-person', this)
    }
}

person.talk()

// get a reference to the talk function , and not call the function
const person1 = person.talk

// the below code will print reference to the window obj, but if strict mode was enable it would have logged undefined
person1()