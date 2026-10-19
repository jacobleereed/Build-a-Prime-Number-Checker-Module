
function isPrime(num) {
    if (num === 1 || num === 0) {
        return false
    }
    let half = Math.ceil(num / 2)
    for (let i = 2; i <= half; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

module.exports = {
  isPrime: isPrime
};
