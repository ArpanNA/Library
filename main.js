// script.js

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Array to hold the books
let library = [];

// Function to add a book to the library array
function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

// Function to display books
function displayBooks() {
  const booksDisplay = document.getElementById("booksDisplay");
  booksDisplay.innerHTML = ""; // Clear existing content

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Title and Author
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} by ${book.author}`;

    // Number of Pages
    const bookPages = document.createElement("p");
    bookPages.textContent = `${book.pages} pages`;

    // Read Status
    const bookRead = document.createElement("p");
    bookRead.textContent = book.read ? "Read" : "Not Read Yet";
    bookRead.classList.add(book.read ? "read" : "not-read"); // Add class based on read status

    // Button to toggle read status
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Change Status";
    toggleReadButton.addEventListener("click", () => toggleReadStatus(index));

    // Button to delete the book
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Book";
    deleteButton.addEventListener("click", () => deleteBook(index));

    // Append elements to book card
    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(toggleReadButton);
    bookCard.appendChild(deleteButton);

    // Append book card to display
    booksDisplay.appendChild(bookCard);
  });
}

// Function to toggle read status
function toggleReadStatus(index) {
  library[index].read = !library[index].read;
  displayBooks();
}

// Function to delete a book from the library
function deleteBook(index) {
  library.splice(index, 1);
  displayBooks();
}

// Toggle form visibility
const toggleFormButton = document.getElementById("toggleFormButton");
const bookForm = document.getElementById("book-form");

toggleFormButton.addEventListener("click", () => {
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
});

// Form submission handler
document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").value === "true";

  // Create a new book object
  const newBook = new Book(title, author, pages, read);

  // Add the new book to the library
  addBookToLibrary(newBook);

  // Reset the form
  document.getElementById("addBookForm").reset();

  // Hide the form after submission
  bookForm.style.display = "none";
});
