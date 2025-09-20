// The goal of this exercise is to create a function that takes (1) two parameters, (2) find the range between the two paramets,
// and (3) sums up the values in the range, inclusive of the two parameters. 

const sumAll = function(a, b) {
    let arr = []
    // Convert parameters into an array to iterate over
    for (let i = a; i <= b; i++){ 
        arr.push(i)
    }
    return arr.reduce((sum, current) => sum + current);

    // Iterate over array to add each element to each other  
};

// === IMPROVED CODE ===
const sumAll = function(a, b) {

    // Test to ensure that the arguments passed through this function are integers; otherwise, an error is returned
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"; 

    // Ensures that a or b are non-negative
    if (a < 0 || b < 0) return "ERROR";

    // If a is greater than b, we can ensure that they're swapped for each other
    if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

    
    let arr = []
    // Convert parameters into an array to iterate over
    for (let i = a; i <= b; i++){ 
        arr.push(i)
    }
    return arr.reduce((sum, current) => sum + current);

    // Iterate over array to add each element to each other  
};



console.log(sumAll('hi', 4));

// Do not edit below this line
module.exports = sumAll;
