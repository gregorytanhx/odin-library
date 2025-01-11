function Book(title, author, pages, year, language, img = '') {
    // constructor
    this.title = arguments[0];
    this.author = arguments[1];
    this.pages = arguments[2];
    this.year = arguments[3];
    this.language = arguments[4];
    this.read = false;
    this.img = img;

    this.info = function () {
        return `Title: ${this.title} Author: ${this.author} Pages: ${
            this.pages
        }\nStatus: ${this.read ? 'read' : 'not read yet'}`;
    };

    this.getHTML = function (id) {
        let html = `<button class="deleteBtn" id="btn${id}">X</button>
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
                    <input type="checkbox" id="read${id}">Mark as Read</input>
                    </div>
                    `;

        return html;
    };
}

function addBookToLibrary(book) {
    myLibrary.splice(0, 0, book);
}

function deleteBook(event) {
    let idx = event.currentTarget.id.slice(3);
    myLibrary.splice(idx, 1);
    let bookCard = document.getElementById(`book${idx}`);
    bookCard.remove();
    console.log(idx, myLibrary);
}

function updateReadStatus(event) {
    let idx = event.target.id.slice(4);
    if (myLibrary[idx].read) {
        myLibrary[idx].read = false;
    } else {
        myLibrary[idx].read = true;
    }
    console.log(idx, myLibrary[idx].read);
    // change background color based on read status
    let bookCard = document.getElementById(`book${idx}`);
    console.log(bookCard);
    if (myLibrary[idx].read) {
        bookCard.style.backgroundColor = style.getPropertyValue('--read-color');
    } else {
        bookCard.style.backgroundColor =
            style.getPropertyValue('--unread-color');
    }
}

function addBookToDisplay(book, i) {
    const bookContainer = document.querySelector('.books-container');
    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.id = `book${i}`;
    bookCard.innerHTML = book.getHTML(i);

    // add button listeners
    let deleteBtn = bookCard.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', deleteBook);

    let toggle = bookCard.querySelector('input[type=checkbox]');
    toggle.addEventListener('input', updateReadStatus);

    bookContainer.appendChild(bookCard);
}

function clearInputs(target) {
    $(target)
        .find(':input')
        .each(function () {
            switch (this.type) {
                case 'password':
                case 'select-multiple':
                case 'select-one':
                case 'text':
                case 'textarea':
                    $(this).val('');
                    break;
                case 'checkbox':
                case 'radio':
                    this.checked = false;
            }
        });
}

var style = window.getComputedStyle(document.body);

const myLibrary = [];

var bookData = [
    {
        author: 'Samuel Beckett',
        country: 'Republic of Ireland',
        imageLink: 'images/molloy-malone-dies-the-unnamable.jpg',
        language: 'French, English',
        link: 'https://en.wikipedia.org/wiki/Molloy_(novel)\n',
        pages: 256,
        title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
        year: 1952,
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
    {
        author: 'Emily Bront\u00eb',
        country: 'United Kingdom',
        imageLink: 'images/wuthering-heights.jpg',
        language: 'English',
        link: 'https://en.wikipedia.org/wiki/Wuthering_Heights\n',
        pages: 342,
        title: 'Wuthering Heights',
        year: 1847,
    },
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

const dialog = document.querySelector('dialog');
const showBtn = document.querySelector('.add-book');
const closeBtn = dialog.querySelector('#submitBtn');

showBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // get all form data
    const inputs = dialog.querySelectorAll('input[type=text]');
    let values = [];
    for (let i of inputs) {
        values.push(i.value);
    }
    const checkbox = dialog.querySelector('input[type=checkbox]');
    values.push(checkbox.checked);
    console.log(values);
    let book = new Book(values[0], values[1], values[2], values[3], values[4], values[5]);
    addBookToLibrary(book);
    addBookToDisplay(book, myLibrary.length-1);
    
    document.getElementById("dialog-form").reset();

    dialog.close();
});

for (let i of bookData) {
    addBookToLibrary(
        new Book(i.title, i.author, i.pages, i.year, i.language, (img = i.link))
    );
}

for (let i = 0; i < myLibrary.length; i++) {
    addBookToDisplay(myLibrary[i], i);
}
