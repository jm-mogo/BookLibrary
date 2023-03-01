const container = document.getElementById('container');
const btnAddBook = document.getElementById('btn-add-book')

const harryPotter = {
    'title': 'Harry Potter',
    'author': 'Elena',
    'pages': '265',
    'read': true,
}

let library = [harryPotter, harryPotter];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard() {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
    <div class="card">
        <h3>${harryPotter.title}</h3>
        <hr>
        <h3>${harryPotter.author}</h3>
        <hr>
        <h3>${harryPotter.pages}</h3>
        <hr>
        <h3>${harryPotter.read}</h3>
        <hr>
        <button class="btn-remove">Remove</button>
    </div>`
    container.append(newCard);
}

function addBookToLibrary() {

}

btnAddBook.addEventListener('click', createCard)