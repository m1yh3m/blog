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

