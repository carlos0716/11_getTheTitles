
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];  
// books.map(({title}) => {
//   return {title};
// });
const getTheTitles = function() {
  
const newArray = books.map(({title})=> title);
 return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
