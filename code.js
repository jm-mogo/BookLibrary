const container = document.getElementById('container');
const btnAddBook = document.getElementById('addBookBtn')
const modal = document.getElementById('addBookModal');
const overlay = document.getElementById('overlay');
const formBook = document.getElementById('addBookForm');
const btnClose = document.getElementById('btn-close');

const formBookTitle = document.getElementById('title');
const formBookAuthor = document.getElementById('author');
const formBookPages = document.getElementById('pages')

let title;
let author;
let pages;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter = new Book('Harry potter', 'elena', 200, true);
const blackList = new Book('Black List', 'Ben', 150, false)

let library = [harryPotter, blackList, harryPotter, blackList];

function addBookForm() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function createCard() {  
    container.innerHTML = ''

    let cards = []


    for (let i = 0; i < library.length ; i++) {
        let newCard = document.createElement('div');
        newCard.classList.add('card');  
        let newId = i;
        newCard.setAttribute('id', newId); 

        let titleH3 = document.createElement('h3');
        let authorH3 = document.createElement('h3');
        let pagesH3 = document.createElement('h3');
        let readH3 = document.createElement('h3');
        let btnRemove = document.createElement('button');

        titleH3.textContent = library[i].title;
        authorH3.textContent = library[i].author;
        pagesH3.textContent = library[i].pages;
        readH3.textContent = library[i].read;
        btnRemove.textContent = 'Remove';
        btnRemove.setAttribute('onclick', `removeCard(${newId});`);
        
        newCard.append(titleH3, authorH3, pagesH3, readH3, btnRemove);
        cards.push(newCard); 
    }
    
    cards.forEach(card => {
        container.appendChild(card);
    });
}

function removeCard(id) {
    library.splice(id, 1);
    createCard()
}

function addBookToLibrary() { 
    title = formBookTitle.value;
    author = formBookAuthor.value;
    pages = formBookPages.value;

    let book = new Book(title, author, pages);
    library.push(book)
}

function getFormData() {
    addBookToLibrary();
    createCard();
    
    formBookTitle.value = '';
    formBookAuthor.value = '';
    formBookPages.value = '';
    
    closeModal()
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

btnAddBook.addEventListener('click', addBookForm);
formBook.addEventListener('submit', getFormData);


btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})
createCard()