console.log('script has been executed')


//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('-- draw')
        }
    }
}

// console.log(createCircle)
const circle = createCircle(1)
// console.log('-- constructor', circle.constructor)

// constructor function

function Circle(radius) {
    console.log('--this', this)
    this.radius = radius;
    this.draw = function () {
        console.log('--draw')
    }
}


const another = new Circle(1);

// console.log('--another--', another)
// console.log('--constructor', another.constructor)

// inbuilt function constructor
const Circle2 = new Function('radius', `
this.radius = radius;
this.draw = function () {
    console.log('--draw Circle2 inbuilt function constructor', this.radius)
}
`)

const circle3 = new Circle2(2);
circle3.draw()

// primitives are copied by value

let p1 = 10;

function inc(p1) {
    p1++;
}

inc(p1);

// console.log('--p1',p1);

// objects are copied by reference

let obj = {
    value: 10,
};

function inc1(obj) {
    obj.value++
}

inc1(obj)

// console.log('--obj', obj)

// iterating over object keys

for (let key in circle3) {
    console.log('--key', key, typeof key, typeof circle3[key])
}