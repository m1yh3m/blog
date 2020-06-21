# FizzBuzz

Problem.

Given a list of numbers from  1 to 100.

Print:

-    `Fizz` for numbers divisible by 3
-    `Buzz` for numbers divisible by 5
-    `FizzBuzz` for numbers divisible by both 3 and 5
-    `Number` itself else

```javascript

// Generate numbers from 1 to N
var firstN = number => new Array(number).fill(0).map((v, i) => i+1)

```

Let's get to code.

## The straightforward way

```javascript

function fizzbuzz(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        var number = numbers[i]
        if(number % 15 === 0) {
            console.log("Fizz Buzz")
        } else if(number % 5 === 0) {
            console.log("Buzz")
        } else if(number % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(number)
        }
    }
}

// run it.
fizzbuzz(firstN(101))

```

Checkout zero.node.js

## A little complex problem.

Instead of going from 1 to 100; try 0 to 100. This requires a bit of change in logic. Checkout one.node.js

## Reducing over conditions

```javascript

var firstN = number => new Array(number).fill(0).map((v, i) => i + 1)

var conditions = [
    i => i % 3 === 0 ? 'Fizz' : '',
    i => i % 5 === 0 ? 'Buzz' : ''
]

function fizzbuzz(numbers) {
    numbers.forEach(number => {
        let val = conditions.reduce((outstr, fn) => outstr + fn(number), '')
        console.log(val || number)
    })
}

// run
// fizzbuzz(firstN(100))

```

The issues here are that `FizzBuzz` doesn't have a space; and it doesn't start from 0.

Trust me, `FizzBuzz` and `starting from 1` make this problem trivial. Changin to `Fizz Buzz` and `starting from 0`: these two small conditions make it a bit more complex.

Checkout two.node.js

---

There are many ways to solve this problem. This is a time waste from here on. Checkout [Issue#1](https://github.com/m1yh3m/blog/issues/1) for code review.

## Object oriented way

```javascript

class Fizz {
    constructor(n) {
        this.n = n
        this.v = n % 3 === 0 ? 'Fizz' : ''
    }
    toString() {
        return this.v
    }
}

class Buzz {
    constructor(n) {
        this.n = n
        this.v = n % 5 === 0 ? 'Buzz' : ''
    }
    toString() {
        return this.v
    }
}

class Factory {
    constructor(n) {
        this.n = n
    }
    toString() {
        return `${new Fizz(this.n)+new Buzz(this.n)||this.n}`
    }
}

module.exports = Factory


// invoke in node
Array(20).fill(0).map((v, i) => i +1).forEach(i => console.log(new Factory(i).toString()))
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

Checkout [oops.node.js](./oops.node.js)

## Functional way

This is the one I like, and I wrote it many moons ago.

```javascrip

var FizzBuzzOptions = [
    function(num) { return num % 3 === 0 ? 'Fizz' : ''; },
    function(num) { return num % 5 === 0 ? 'Buzz' : ''; }
];

var FizzBuzzEr = function(options, numbers){
    numbers.forEach(i => {
        let output = '';
        output = options.reduce((a, x) => a + x(i), output) || i
        console.log(output);
    })
}

FizzBuzzEr(FizzBuzzOptions, Array(100).fill(0).map((v, i) => i + 1));

```

Here's the review:

- Extensible
- Flexible input range
- Functional

Let's discuss these quickly.

Extensible.

You can add another condition in FizzBuzzOptions array which will make the FizzBuzzEr function to obey it. This is without changing the implementation function. We have successfully achieved extensibility without changing logical implementation. This is decoupled.

Of course, if we make a fundamental change in the logic, the code will have to be tossed out.

Flexible input range: this one is obvious with introduction of `number` param.

Functional.

We are passing functions around and executing them. This is cool. 

