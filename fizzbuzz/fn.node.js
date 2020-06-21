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

