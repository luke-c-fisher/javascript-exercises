const findTheOldest = function(array) {
    return array
        .map((age) => age.yearOfDeath - age.yearOfBirth)
        .reduce((accumulator, age) => {
            return (accumulator > age ? accumulator : age)
        }, 0);
    
        
};

// accum[user.name]

// let arr = [1, 5, 6, 8, 9]

// const findMax = function (array) {
//     let maxVal = array.reduce((accumulator, value) => {
//         return (accumulator > value ? accumulator : value);
//     }, 0);
//     return maxVal;
// }

// console.log(findMax(arr));

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

// Do not edit below this line
// module.exports = findTheOldest;
