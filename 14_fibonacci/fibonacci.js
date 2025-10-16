// the role of 'num' is to index that through the fibonacci sequence
// and return the respective value at that index (i.e., index of 4 = 3)

const fibonacci = function(num) {
    if (num <= 0) return null;

    const fib = [1, 1];
    for (let i = 2; i < num; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num - 1];
};

console.log(fibonacci(90));

// Do not edit below this line
// module.exports = fibonacci;
