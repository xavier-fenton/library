//this code is an example of how I add to the DOM

const para = document.createElement('p')
const node = document.createTextNode('Where I want to display Library:')
para.appendChild(node)
const element = document.getElementById('div1')
element.appendChild(para)


//I want to display this data on the page without manually coding html


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
