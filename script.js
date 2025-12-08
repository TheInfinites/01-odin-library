const myLibrary = [];



// the book contructors 
function Book (name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    // this.readStatus = readStatus;
    this.id = crypto.randomUUID()

    if (readStatus.toLowerCase() === "yes") {
        this.readStatus = "read";
    } else {
        this.readStatus = "yet to read";
    };

}

// adding books to the lib
function addBookToLibary(name, author, pages, readStatus) {
    const book = new Book(name, author, pages, readStatus);
    myLibrary.push(book); 
}

addBookToLibary("Percy Jackson", "Rick", 234, "Nope" );
addBookToLibary("meow", "meo", 234, "yes" );
addBookToLibary("Jack", "Jill", 234, "yes" );


const bla = document.querySelector(".hero");

function creatingDivs(title, author, pages, idd, read) {
    const heroCard = document.createElement("div")
    heroCard.className = "heroCard";
    heroCard.id = `h${idd}`;
    heroCard.dataset.id = `${idd}`;
    bla.appendChild(heroCard);
    const getHeroCard = document.querySelector(`#h${idd}`);

    // the title
    const title_container = document.createElement("div");
    title_container.classList = `title_container`;
    title_container.id = `t${idd}`;
    getHeroCard.appendChild(title_container);
    const getTitleContainer = document.querySelector(`#t${idd}`)


    const title_pre = document.createElement("div");
    title_pre.classList = "book_pre";
    title_pre.textContent = "Title";
    getTitleContainer.appendChild(title_pre);

    // title main
    const titleInfo = document.createElement("div");
    titleInfo.className = "titleInfo";
    titleInfo.textContent = title;
    getTitleContainer.appendChild(titleInfo);

    //////////////

    // author
    const author_container = document.createElement("div");
    author_container.classList = `author_container`;
    author_container.id = `a${idd}`;
    getHeroCard.appendChild(author_container);
    const getAuthorContainer = document.querySelector(`#a${idd}`)


    const author_pre = document.createElement("div");
    author_pre.classList = "author_pre";
    author_pre.textContent = "Author";
    getAuthorContainer.appendChild(author_pre);


    // author main
    const authorInfo = document.createElement("div");
    authorInfo.className = "authorInfo";
    authorInfo.textContent = author;
    getAuthorContainer.appendChild(authorInfo);

    ///////////////

    // pages
    const pages_container = document.createElement("div");
    pages_container.classList = `pages_container`;
    pages_container.id = `p${idd}`;
    getHeroCard.appendChild(pages_container);
    const getPagesContainer = document.querySelector(`#p${idd}`)


    const pages_pre = document.createElement("div");
    pages_pre.classList = "pages_pre";
    pages_pre.textContent = "Pages";
    getPagesContainer.appendChild(pages_pre);


    // pages main
    const pagesInfo = document.createElement("div");
    pagesInfo.className = "pagesInfo";
    pagesInfo.textContent = pages;
    getPagesContainer.appendChild(pagesInfo);

    /////////////////////////////

    // read status
    const readStatus_container = document.createElement("div");
    readStatus_container.classList = `readStatus_container`;
    readStatus_container.id = `r${idd}`;
    getHeroCard.appendChild(readStatus_container);
    const getReadStatusContainer = document.querySelector(`#r${idd}`)
    getReadStatusContainer.dataset.id = `${idd}`;


    const read_pre = document.createElement("div");
    read_pre.classList = "read_pre";
    read_pre.textContent = "Read Status";
    getReadStatusContainer.appendChild(read_pre);


    // read main
    const readInfo = document.createElement("div");
    readInfo.className = "readInfo";
    readInfo.textContent = read;
    getReadStatusContainer.appendChild(readInfo);

    
    /////////////////////////////

    // del button container
    const delBtnContainter = document.createElement("div");
    delBtnContainter.classList = `delBtnContainer`;
    delBtnContainter.id = `d${idd}`;
    getHeroCard.appendChild(delBtnContainter);
    const getDelBtnCont = document.querySelector(`#d${idd}`);

    // del button
    const delBtn = document.createElement("button");
    delBtn.classList = "delete_button";
    delBtn.textContent = "del";
    delBtn.dataset.id = `${idd}`;
    getDelBtnCont.appendChild(delBtn); 

    
}

function loopinThrough () {
    let i = 1;
    const something = myLibrary.forEach(book => {
  
        console.log(i)
        creatingDivs(book.name, book.author, book.pages, book.id, book.readStatus);
        i++;

    })

    // for (let i = 0; i < myLibrary.length; i++){
    //     creatingDivs(myLibrary[i].name,myLibrary[i].author, myLibrary[i].id )
    // }
}



loopinThrough();


function delStatus (){

    let getRead = document.querySelectorAll(".delete_button");
    
    myLibrary.forEach(stuff => {
    
        getRead.forEach(read => {
            read.addEventListener("mouseup", (e) => {
                console.log("yes!")
                // console.log(stuff.id);
    
                if(stuff.id == read.dataset.id){
                    console.log("yay!");
                    console.log(stuff.name);
                    // console.log(myLibrary)

                    const delDiv = document.querySelector(`[id*=h${stuff.id}]`);
                    delDiv.remove();
                    // rmeoving book from the object 
                    let index = myLibrary.findIndex(user => user.id == stuff.id);
                    myLibrary.splice(index, 1);
                    
                }
    
            })
        })
    
    })

}

delStatus();

function getFormData (){

    const form = document.querySelector(".form-book");
    // getting and setting data from the form 
    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        const book_name = document.querySelector("#book_name").value;
        const author_name = document.querySelector("#author_name").value;
        const pages = document.querySelector("#pages").value;
        const readStatus = document.querySelector("#status").value;
        
        const getHeroCard = document.querySelectorAll(".heroCard");
        Array.from(getHeroCard).forEach(div => div.remove());
        // myLibrary.length = 0;
        addBookToLibary(book_name, author_name, pages, readStatus);
        loopinThrough();
        
        delStatus();
    });
}

getFormData();



