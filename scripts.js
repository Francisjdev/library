const screen = document.getElementById("container")
const newBookBtn = document.getElementById("newBook")
const modal = document.querySelector(".modal")
const addBtn = document.querySelector("#addBtn")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")

showForm(newBookBtn)
saveBook(addBtn)
const myLibrary = [];

function Book( title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return `${author} wrote ${title}, ${pages}, ${read}`
    }
}
function addBookToLibrary(ele) {
   myLibrary.push(ele)
   displayLibrary(myLibrary)
}
function showForm(obj){
    obj.addEventListener('click', () => {
        modal.showModal();
    } )
}
function saveBook(obj){
    obj.addEventListener('click', (e) => {
        console.log(title,author,pages,read)
        
        addBookToLibrary(createBook(title.value, author.value, pages.value, read.value))
    } )
}
function createBook(a, b, c, d){
    let book = new Book(a, b, c, d)
    console.log("llegue aca")
    return book
}
function displayLibrary(arr){
    screen.textContent=" "
    for(let book of arr){
        const bookCard = document.createElement("div")
        bookCard.textContent = book.info()
        screen.appendChild(bookCard)
    }
}
