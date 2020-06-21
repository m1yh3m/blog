
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

module.exports = fizzbuzz

/* sample output
 * var f = require('./two.node')
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
 * FizzBuzz
 * 16
 * 17
 * Fizz
 * 19
 * Buzz
 * Fizz
 * */

