# FizzBuzz

Problem.

Given a list of numbers from  1 to 100.

Print:

-    Fizz for numbers divisible by 3
-    Buzz for numbers divisible by 5
-    FizzBuzz for numbers divisible by both 3 and 5
-    Number itself else

```javascript

// Generate numbers from 1 to 100
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

