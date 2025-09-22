const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR"; 
    if (year < 0) return "ERROR";

    if (year % 100 == 0 && year % 400 !== 0 || year % 4 !== 0) return false;
    if (year % 4 == 0) return true;

};


console.log(leapYears('hello world'));
console.log(leapYears(1800));
console.log(leapYears(1600));




// Do not edit below this line
module.exports = leapYears;
