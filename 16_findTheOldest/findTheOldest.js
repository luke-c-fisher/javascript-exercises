const findTheOldest = function(array) {
    return array
        .map(age => ({name: age.name, age: age.yearOfDeath - age.yearOfBirth}))
        .reduce((prev, cur) => {
            return prev.age > cur.age ? prev.name : cur.name;
        });    
};

// const findTheOldest = function(array) {
//     let obj = array
//         .map(age => ({name: age.name, age: age.yearOfDeath - age.yearOfBirth}));
    
//     return obj.reduce((prev, cur) => {
//             return obj[prev.age] > obj[cur.age] ? prev.name : cur.name;
//         }, {});    
// };

// obj[value.name] = e

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
