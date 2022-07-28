let myLibrary = [];

// creating a Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length;

    this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} page(s), ${this.read}`;
    }

    this.toggle = function() {
      if (this.read == "Read") {
        this.read = "Not read";
      }

      else {
        this.read = "Read";
      }
    }
}

// Creating 2 functions to add books to librar
// Didn't use
function addBookToLibrary(book) {
  myLibrary.push(book);
}

const addBook = document.getElementsByClassName("pushBook")[0];
addBook.addEventListener('click', function() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  myLibrary.push(new Book(title, author, pages, read));

  updateDisplay();
})

// When ready, add books from library to display
function updateDisplay() {
  const lib = document.getElementsByClassName("library")[0];

  lib.innerHTML = '';

  for (let book of myLibrary) {
    const newBook = document.createElement("div");
    newBook.classList.add("card");
    newBook.innerHTML = `
                        <div class="title">${book.title}</div>
                        <div class="image"><em><h3>Cover Image here</h3></em></div>
                        <div class="author">By ${book.author}</div>
                        <div class="pg-num">${book.pages} pages</div>
                        <div class="read">${book.read}</div>
                        <button type="button" class="remove">Remove</button>
                        <button type="button" class="toggle">Read/Not Read</button>
                        `;
    // Create button to remove button from myLibrary, and then display
    newBook.getElementsByClassName("remove")[0].addEventListener('click', function (e) {
      myLibrary.splice(book.index, 1);

      // Renumber index of books in myLibrary
      for (let i in myLibrary) {
        myLibrary[i].index = i;
      }

      updateDisplay();
    })

    // Toggle read/not read
    newBook.getElementsByClassName("toggle")[0].addEventListener('click', function (e) {
      book.toggle();
      updateDisplay();
    });

    lib.appendChild(newBook);
  }
}

// Some example books, before manual addition
const lotr = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read");
myLibrary.push(lotr);

const endersGame = new Book("Ender's Game", "Orson Scott Card", 1234, "Read")
myLibrary.push(endersGame);

const magicTree = new Book("The Magic Tree House", "Mary SHelley", 123, "Read")
myLibrary.push(magicTree);


updateDisplay();



