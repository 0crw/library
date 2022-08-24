let myLibrary = [];
let book;

const openBtn = document.getElementById('plusBtn');
const newModal = document.getElementById('modalPopup');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeBtn');

const form = document.getElementById('myForm');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
/* const read = document.getElementById('read'); */

const bookBox = document.getElementById('library');


openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
addBtn.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    
    book = new Book(title.value, author.value, pages.value, read.checked);

    if (title.value == '' || author.value == '' || pages.value == '') {
        alert('Make sure fill in all the required data');
        return;
    };

    myLibrary.push(book);
    form.reset();
    closeModal();
    showBook();
    console.table(myLibrary);
};

function showBook() {
    
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    bookBox.appendChild(newCard);

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `${book.title}`;
    newCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `${book.author}`;
    newCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `${book.pages}`;
    newCard.appendChild(bookPages);

    const changeCard = document.createElement('span');
    changeCard.textContent = 'bookmark';
    changeCard.classList.add('material-icons', 'leftChange');
    changeCard.addEventListener('click', () => {
        if(newCard.classList.contains('card')){
            newCard.classList.remove('card');
            newCard.classList.add('cardRead');
        } else {
            newCard.classList.remove('cardRead');
            newCard.classList.add('card');
        };
    });
    newCard.appendChild(changeCard);

    
    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'delete';
    removeBtn.classList.add('material-icons', 'rightDelete');
    removeBtn.addEventListener('click', () => {
        removeBtn.parentNode.remove();
        myLibrary.splice(myLibrary.indexOf(book),1);
        console.table(myLibrary);
    });
    newCard.appendChild(removeBtn); 
};

function showModal() {
    newModal.style.display = 'block';
};

function closeModal() {
    newModal.style.display = 'none';
};

window.onclick = function(e) {
    if (e.target == newModal) {
        newModal.style.display = 'none';
    };
};