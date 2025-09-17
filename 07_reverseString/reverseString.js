const reverseString = function(str) {
    let arr = str.split('')

    let rev = arr.reverse()

    let result = rev.join('')
    
    return (result);
};


console.log(reverseString('hello good morning'));





// Do not edit below this line
module.exports = reverseString;
