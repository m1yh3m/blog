# FizzBuzz

Problem.

Given a list of numbers from  1 to 100.

Print:

-    Fizz for numbers divisible by 3
-    Buzz for numbers divisible by 5
-    FizzBuzz for numbers divisible by both 3 and 5
-    Number itself else

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

Trust me, `FizzBuzz` and starting from 1 make this problem trivial. Adding these two small conditions make it a bit more complex.

Checkout two.node.js

