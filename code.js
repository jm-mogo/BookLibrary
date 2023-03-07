const container = document.getElementById('container');
const btnAddBook = document.getElementById('addBookBtn')
const modal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter = new Book('Harry potter', 'elena', 200, true);
const BlackList = new Book('Black List', 'Ben', 150, false)

let library = [];

function addBookForm() {
    modal.classList.add('active');
    overlay.classList.add('active')
}

function createCard() {  
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let titleH3 = document.createElement('h3');
    let authorH3 = document.createElement('h3');
    let pagesH3 = document.createElement('h3');
    let readH3 = document.createElement('h3');

    titleH3.textContent = harryPotter.title;
    authorH3.textContent = harryPotter.author;
    pagesH3.textContent = harryPotter.pages;
    readH3.textContent = harryPotter.read;

    newCard.append(titleH3, authorH3, pagesH3, readH3)

    container.append(newCard);
}

function addBookToLibrary() {

}


btnAddBook.addEventListener('click', addBookForm);