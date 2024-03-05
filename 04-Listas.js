class Book {
    constructor(name, isbn, author, editorial) {
      this.name = name;
      this.isbn = isbn;
      this.author = author;
      this.editorial = editorial;
    }
  }
  
  // Create some example books
  const book1 = new Book("The Great Gatsby", "978-0743273565", "F. Scott Fitzgerald", "Scribner");
  const book2 = new Book("To Kill a Mockingbird", "978-0061120084", "Harper Lee", "Harper Perennial Modern Classics");
  const book3 = new Book("1984", "978-0451524935", "George Orwell", "Signet Classic");
  
  // Initialize an empty stack (array) to hold our books
  const bookStack = [];
  
  // Add the example books to the stack
  bookStack.push(book1);
  bookStack.push(book2);
  bookStack.push(book3);
  
  // Print the stack (for demonstration purposes)
  console.log("Books in the stack:");
  bookStack.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    console.log(`Name: ${book.name}`);
    console.log(`ISBN: ${book.isbn}`);
    console.log(`Author: ${book.author}`);
    console.log(`Editorial: ${book.editorial}`);
    console.log("--------------------");
  });
  