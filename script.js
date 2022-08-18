document.getElementById('addBtn').addEventListener('click', addBook);

let myLibrary = [];
let newBook;


function Book(title, author, pages, read) {

    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;

}

function addBook() {
    let title  = document.getElementById('newTitle').value;
    let author = document.getElementById('newAuthor').value;
    let pages  = document.getElementById('newPages').value;
    let read   = document.getElementById('newRead').value;

    newBook = new Book(title, author, pages, read);

    addBookToLibrary();
    console.table(myLibrary);
    return false;
}

function addBookToLibrary(){
    myLibrary.push(newBook);
}