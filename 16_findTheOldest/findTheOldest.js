const findTheOldest = function(array) {
    return array
        .map(age => ({name: age.name, age: age.yearOfDeath - age.yearOfBirth}))
        .reduce((acc, cur) => !acc || (acc.age) < (cur.age) ? cur.name : acc, '');
};


const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 2020,
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
module.exports = findTheOldest;
