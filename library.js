//*to do later -- support for multiple authors? series?
let library = [
    {
        name: "The Color of Magic",
        authorFirst: "Terry",
        authorLast: "Pratchett",
        pages: 228,
        year: 2005,
        read: "yes",
    },
    {
        name: "The Story of the Stone",
        authorFirst: "Barry",
        authorLast: "Hughart",
        pages: 289,
        year: 1989,
        read: "yes",
    },
    {
        name: "The Hobbit",
        authorFirst: "JRR",
        authorLast: "Tolkien",
        pages: 310,
        year: 1937,
        read: "yes",
    },
    {
        name: "Cryptonomicon",
        authorFirst: "Neal",
        authorLast: "Stephenson",
        pages: 1129,
        year: 2002,
        read: "yes",
    },{
        name: "The Graveyard Book",
        authorFirst: "Neil",
        authorLast: "Gaiman",
        pages: 307,
        year: 2008,
        read: "yes",
    },

];

function bookMaker(name, authorFirst, authorLast, pages, year, read) {
    this.name = name;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
    this.pages = pages;
    this.year = year;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}
