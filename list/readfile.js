let List = require('./list.js');
const fs = require('fs');
let movies = fs.readFileSync('./books.txt', 'utf8').split("\n");
function trim(str) {
  return str.replace(/(^\s*)(\S*)(\s*)$/, "$2")
}
movies = movies.map(trim);

let movieList = new List();

for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}


console.log(movieList.getElement());