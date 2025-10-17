const getTheTitles = function(arr) {
    // return arr.reduce((a,b) => {
    //     return [a.title, b.title];
    // });
    return arr.map((book) => book.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
   {
    title: 'Book3',
    author: 'Name2'
  },

]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
