
var firstN = number => new Array(number).fill(0).map((v, i) => i+1)

// Monkey patching; its bad but meh

Array.prototype.firstN = firstN

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

module.exports = fizzbuzz

/* sample run
 * f([].firstN(20))
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * Fizz Buzz
 * 16
 * 17
 * Fizz
 * 19
 * Buzz
 * */

