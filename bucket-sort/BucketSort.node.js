function bucketSort(input, bucketSize = 10) {
    return input.reduce((a, c) => {
        let bucket = Math.floor(c / bucketSize)
        a[bucket] = a[bucket] || []
        a[bucket].push(c)
        a[bucket].sort()
        return a
    }, [])
}

module.exports = bucketSort

