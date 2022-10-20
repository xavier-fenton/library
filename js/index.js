//this code is an example of how I add to the DOM

const para = document.createElement('p')
const node = document.createTextNode('Where I want to display Library:')
para.appendChild(node)
const element = document.getElementById('div1')
element.appendChild(para)

//I want to display this data on the page without manually coding html
//this displays the title in the DOM as a placeholder

// let display = new Array(dummyData.book)
// console.log(display)
// let keys = display.map((x) => `${x.title}`)
// console.log(keys)
// document.getElementById('div1').innerHTML += 'Book: ' + display

//Create a for loop to access each key in the obj of dummy data
let myLibrary = []

const info = new Book('Lord of the Rings', 'Xavier Golem', 5000, '5 times')

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let title = 'xavier'
  let author = 'xavier2'
  let pages = '5000'
  let read = true
  myLibrary.push(new Book(title, author, pages, read))
}

addBookToLibrary()
console.log(myLibrary)
