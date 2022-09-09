
////// DONE ///////
function getTotalBooksCount(books) {
  let totalBooks = 0; 
    books.forEach((book) => {
      totalBooks += 1; 
    })
    return totalBooks; 
}

////// DONE ///////
function getTotalAccountsCount(accounts) {
  let totalAccounts = 0; 
  accounts.forEach((account) => {
    totalAccounts +=1;
  })
  return totalAccounts; 
  }


////// DONE ///////
function getBooksBorrowedCount(books) {
  result = books.filter((book) => book.borrows[0].returned === false)
  return result.length; 
}

////// DONE ///////
function getMostCommonGenres(books) {
  const newBooksObject = books.reduce((newBooksObject, {genre}) => {
    newBooksObject[genre] ? newBooksObject[genre]++ : newBooksObject[genre] = 1
    return newBooksObject
  },{})
  
  return Object.entries(newBooksObject).map(([name, count]) => (
  {name, count})).sort((genreA,genreB) => genreB.count - genreA.count).slice(0,5)
}

////// DONE ///////
function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5)
}



///HELPER FUNCTION FOR getMostPopularAuthors
function sortAndSlice(array){
  return array.sort((objA, objB) => (objA.count < objB.count ? 1 : -1)).slice(0,5);
}


////// DONE ///////
 function getMostPopularAuthors(books, authors) {
  const topAuthorsArray = [];
  authors.forEach((author) => {
    const byThisAuthor = books.filter((book) => book.authorId === author.id);
    let totalBorrows = 0;
    byThisAuthor.forEach((book) => (totalBorrows += book.borrows.length));
    topAuthorsArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
  //topAuthorsArray.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)); 
  //topAuthorsArray.length = 5;
  return sortAndSlice(topAuthorsArray);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
