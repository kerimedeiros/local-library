////// DONE ///////
function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

////// DONE ///////
function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) => lastNameA.name.last < lastNameB.name.last ? -1 : 1);
  return accounts;
}


////// DONE ///////
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idCount = book.borrows.filter(borrow => borrow.id === account.id).length
    return total + idCount
  }, 0)
}
////// DONE ///////
function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksPossessedByAccount = booksCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
 
    return { ...book, author }; 
  });
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
