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

// to know if object has certain property

if ('radius' in circle3)
    console.log('test for circle having radius property passed')

circle3.location = {
    x: 1,
    y: 1,
};


if('x' in circle3.location)
    console.log('-circle has location x')


// getter and  setter function

function Stopwatch() {
    let startTime, endTime, isRunning, totalRunTime

    this.start = function() {
        if(isRunning) {
            throw new Error('Stop watch is already runnig')
        }

        startTime = new Date()
        isRunning = true
        console.log('Stop watched is now running')
    }

    this.stop = function() {
        if(!isRunning) {
            throw new Error('Stop watch not running')
        }

        endTime = new Date()
        // calc run time
        totalRunTime = (endTime - startTime) / 1000
        console.log(totalRunTime + ' seconds')
        isRunning = false
        console.log('Stop watched has now stopped')
    }

    Object.defineProperty(this, 'totalRunTime', {
        get: function () {
            return totalRunTime
        }
    })


}

const stopwatch = new Stopwatch()
stopwatch.start()
stopwatch.stop()
