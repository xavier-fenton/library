const dummyData = {
  book: {
    title: 'Macdancer',
    author: 'MacDancerSoftwareEnterprise',
    pages: 'neverending',
    read: 'infinitley',
  },
}

let myLibrary = [dummyData.book]
console.log('this is my library ', myLibrary)

const info = new Book('Lord of the Rings', 'Xavier Golem', 5000, '5 times')
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.sayTitle = function () {
    console.log(title)
  }
}

function addBookToLibrary() {
  let book = myLibrary.push(info)
}

addBookToLibrary()
