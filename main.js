function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let isRead = this.read ? "read" : "not read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${isRead}`;
  };
}
const book1 = new Books("Haunting Hills", "J. K. Rowling", 400, true);
const book2 = new Books("Harry Potter", "J. K. Rowling", 400, false);
const book3 = new Books("Ramayana", "Valmiki", 500, true);

console.table(book1);
console.table(book2);
console.table(book3);
