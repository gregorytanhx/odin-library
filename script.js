const myLibrary = [];

function Book(title, author, pages, year, language) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.language = language
    this.read = false;

    this.info = function () {
        return `Title: ${this.title} Author: ${this.author} Pages: ${
            this.pages
        }\nStatus: ${this.read ? 'read' : 'not read yet'}`;
    };

    this.getHTML = function () {
        let html = `<button>X</button>
                    <div class="book-title">
                    ${this.title}
                    </div>
                    
                    <br>
                    <div class="book-info">
                    Author: ${this.author}
                    <br>
                    Pages: ${this.pages}
                    <br>
                    Year: ${this.year}
                    <br>
                    Language: ${this.language}
                    </div>
                    <br>
                    <div class="read-status">
                    <input type="checkbox">Mark as Read</input>
                    </div>
                    `;

        return html;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    bookContainer = document.querySelector('.books-container');
    for (let book of myLibrary) {
        let bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = book.getHTML();
        console.log(book.info());
        bookCard.getEle

        bookContainer.appendChild(bookCard);
    }
}

var bookData = [
    {
        author: 'Jane Austen',
        country: 'United Kingdom',
        imageLink: 'images/pride-and-prejudice.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice\n',
        pages: 226,
        title: 'Pride and Prejudice',
        year: 1813,
    },
    {
        author: 'Honor\u00e9 de Balzac',
        country: 'France',
        imageLink: 'images/le-pere-goriot.jpg',
        language: 'French',
        link: 'https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n',
        pages: 443,
        title: 'Le P\u00e8re Goriot',
        year: 1835,
    },
    {
        author: 'Giovanni Boccaccio',
        country: 'Italy',
        imageLink: 'images/the-decameron.jpg',
        language: 'Italian',
        link: 'https://en.wikipedia.org/wiki/The_Decameron\n',
        pages: 1024,
        title: 'The Decameron',
        year: 1351,
    },
    {
        author: 'Jorge Luis Borges',
        country: 'Argentina',
        imageLink: 'images/ficciones.jpg',
        language: 'Spanish',
        link: 'https://en.wikipedia.org/wiki/Ficciones\n',
        pages: 224,
        title: 'Ficciones',
        year: 1965,
    },
];

for (let i of bookData) {
    addBookToLibrary(new Book(i.title, i.author, i.pages, i.year, i.language));
}

displayBooks();
