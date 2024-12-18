const screen = document.getElementById("container")
const newBookBtn = document.getElementById("newBook")
const modal = document.querySelector("dialog")
const addBtn = document.querySelector("#addBtn")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")
const closeBtn = document.querySelector("#closeBtn")

showForm(newBookBtn)
saveBook(addBtn)
closeForm(closeBtn)
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
function closeForm(obj){
    obj.addEventListener('click', () => {
        modal.close();
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
    for(let book in arr){
        let ctitulo = document.createElement("p")
        let cauthor = document.createElement("p")
        let cpaginas = document.createElement("p")
        let cleido = document.createElement("p")
        let htitulo = document.createElement("p")
        let hauthor = document.createElement("p")
        let hpaginas = document.createElement("p")
        let hleido = document.createElement("p")
        let bleido = document.createElement("button")
        let borrar = document.createElement("button")
        const bookCard = document.createElement("div")
        const content = document.createElement("div")
        bleido.addEventListener('click', ()=>{
             (cleido.textContent=="si") ?  cleido.textContent="no": cleido.textContent="si" })
        borrar.addEventListener('click', ()=>{
            arr.splice(book,1)
            displayLibrary(arr)
            console.log("estoy borrando algo")})
        content.classList.add('content')
        bookCard.classList.add("card")
        bookCard.setAttribute("id", `${book}`);
        htitulo.textContent = "Titulo"
        hauthor.textContent = "Author"
        hpaginas.textContent = "Paginas"
        hleido.textContent = "Ha sido leido?"
        ctitulo.textContent = arr[book].title
        cauthor.textContent = arr[book].author
        cpaginas.textContent = arr[book].pages
        cleido.textContent = arr[book].read
        bleido.textContent = "Cambiar"
        borrar.textContent = "Eliminar"
        content.appendChild(htitulo)
        content.appendChild(ctitulo)
        content.appendChild(hauthor)
        content.appendChild(cauthor)
        content.appendChild(hpaginas)
        content.appendChild(cpaginas)
        content.appendChild(hleido)
        content.appendChild(cleido)  
        content.appendChild(bleido)
        content.appendChild(borrar)
        bookCard.appendChild(content)
        screen.appendChild(bookCard)
    }
}
