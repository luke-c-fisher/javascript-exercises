const palindromes = function (string) {
    let newString = string.replace(/[^A-Z0-9]/ig, "");
    let revString = string.split("").reverse().join("");
    return (revString == newString);
}

// https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re

console.log(palindromes('A car, a man, a maraca.'));
// console.log(palindromes('tacos'));


// .split(" ").reverse().join(" ")
// Do not edit below this line
module.exports = palindromes;
