const myLibrary = [];

function Book(title, author, numPages, read) {
    // constructor
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function () {
        return `${title} by ${author}, ${numPages} pages, ${read ? "read" : "not read yet"}`;
    };

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    
}

// function getBooks(file) {
//     var fs = require('fs');
//     fs.readFile(file, 'utf-8', function(err, data) {
//         if (err) throw err;
//         bookArray = JSON.parse(file);
//         for (book of bookArray) {
//             console.log(book);
//         }
//     })
    

// }


// getBooks("books.json");
