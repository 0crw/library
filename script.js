const plusBtn = document.querySelector('#plusBtn');             // Modal openButton
const closeBtn = document.getElementsByClassName('close')[0];   // Modal closeButton
const modal = document.querySelector('#modalPopup');            // Modal by ID
const addBtn = document.querySelector('#addBtn');               // Form Button
const inputForm = document.querySelector('#myForm');            // Form => reset() in addBookToLibrary
const bookContainer = document.querySelector('.content');       // Card Container to display books

let myLibrary = [];
let newBook;

// addEventListener to buttons
addBtn.addEventListener('click', addBookToLibrary);
plusBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);


function Book(title, author, pages, read) {

    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
}

function addBookToLibrary() {

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;         // take values from userInput
    let read = document.querySelector('#read').value;
    newBook = new Book(title, author, pages, read);             // create newBook using these values 
    myLibrary.push(newBook);
    showBook();                                                 // show newBook on display                                                
    inputForm.reset();                                          // reset userInput after take the values
    console.table(myLibrary);
    closeModal();                                               // auto-close modal after create newBook
}

// display book in library
function showBook() {

    const removeOldCard = document.querySelectorAll('.card');   // remove old cards(node) to avoid duplication
    for (let i = 0; i < removeOldCard.length; i++) {
        removeOldCard[i].remove();
    }

    myLibrary.forEach(myLibrary => {                            
        const newCard = document.createElement('div');        
        newCard.classList.add('card');                          // add the .card class to show books on display
        bookContainer.appendChild(newCard);                     

        for (let key in myLibrary) {                            // for each key present in myLibrary stamp respective value
            const newPara = document.createElement('p');
            newPara.textContent = (`${myLibrary[key]}`);
            newCard.appendChild(newPara); 
        }
    }) 
}


// modal show/hide
function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}




/*
function showBook() {
    myLibrary.forEach(myLibrary) => {
        const newCard =  document.createElement('div');
        newCard.classList.add('card');
        bookContainer.appendChild(newCard);

        const textTitle = document.createElement('h4');
        textTitle.textContent = newBook.title;
        newCard.appendChild(textTitle);

        const textAuthor = document.createElement('em');
        textAuthor.textContent = newBook.author;
        newCard.appendChild(textAuthor);

        const textPages = document.createElement('p');
        textPages.textContent = newBook.pages + " pages"
        newCard.appendChild(textPages);
    });
}
*/
/*
function displayLibrary() {
    for(i = 0; i < myLibrary.length-1; i++) {
    }
}
*/