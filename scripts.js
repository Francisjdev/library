const screen = document.getElementById("container")
const newBookBtn = document.getElementById("newBook")
const modal = document.querySelector("dialog")
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
        modal.close();
        modal.showModal();
    } )
}
function saveBook(obj){
    obj.addEventListener('click', (e) => {
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
        let ctitulo = document.createElement("p")
        let cauthor = document.createElement("p")
        let cpaginas = document.createElement("p")
        let cleido = document.createElement("p")
        let htitulo = document.createElement("p")
        let hauthor = document.createElement("p")
        let hpaginas = document.createElement("p")
        let hleido = document.createElement("p")
        const bookCard = document.createElement("div")
        const content = document.createElement("div")
        content.classList.add('content')
        bookCard.classList.add("card")
        htitulo.textContent = "Titulo"
        hauthor.textContent = "Author"
        hpaginas.textContent = "Paginas"
        hleido.textContent = "Ha sido leido?"
        ctitulo.textContent = book.title
        cauthor.textContent = book.author
        cpaginas.textContent = book.pages
        cleido.textContent = book.read
        content.appendChild(htitulo)
        content.appendChild(ctitulo)
        content.appendChild(hauthor)
        content.appendChild(cauthor)
        content.appendChild(hpaginas)
        content.appendChild(cpaginas)
        content.appendChild(hleido)
        content.appendChild(cleido)
        bookCard.appendChild(content)
        screen.appendChild(bookCard)
    }
}
