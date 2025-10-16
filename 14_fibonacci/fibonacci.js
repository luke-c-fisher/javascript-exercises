const fibonacci = function(num) {
    let arr = [];
    for (let i = 1; i <= num; i++){
        arr += i;
    }
    return arr;

};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
