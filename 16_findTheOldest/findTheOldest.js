const findTheOldest = function(array) {
    return array.reduce((accum, user) => {
        accum[user.name] = user.yearOfDeath - user.yearOfBirth;
        return accum;
    }, {});
    // return array.sort((a, b) => b.yearOfDeath - a.yearOfDeath);
};

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
module.exports = findTheOldest;
