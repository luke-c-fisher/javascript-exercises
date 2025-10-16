const palindromes = function (string) {
    let newString = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let revString = newString.split("").reverse().join("");
    return (revString === newString);

}


console.log(palindromes('rac3e3car'));
// console.log(palindromes('tacos'));


// .split(" ").reverse().join(" ")
// Do not edit below this line
module.exports = palindromes;
