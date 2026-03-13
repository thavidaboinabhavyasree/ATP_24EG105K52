//Problem Statement: Library Book Management System
//------------------------------------------------
//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
//Create a Book class with the following:

//Properties:
//title (string)
//author (string)
//pages (number)
//isAvailable (boolean, default: true)


//Methods:
//borrow() - Marks the book as not available
//returnBook() - Marks the book as available
//getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//isLongBook() - Returns true if pages > 300, false otherwise


//1. Create at least 5 book objects using the class:
//Example: "Harry Potter", "1984", "The Hobbit", etc.


//2. Perform the following operations:

//i. Display info of all books
//ii. Borrow 2 books and show their availability status
//iii. Return 1 book and show updated status
//iv. Count how many books are "long books" (more than 300 pages)
//v. List all available books

class Book{
    title;
    author;
    pages;
    isAvailable=true;       

     constructor(title, author, pages, isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
     }

}

//create method borrow() and mark the book as not available
Book.prototype.borrow=function(){
    this.isAvailable=false;
}   
//create method returnBook() and mark the book as available
Book.prototype.returnBook=function(){
    this.isAvailable=true;
}
//create method getInfo() and return a string with book details
Book.prototype.getInfo=function(){
    return `${this.title} by ${this.author} (${this.pages} pages)`;
}   
//create method isLongBook() and return true if pages > 300, false otherwise
Book.prototype.isLongBook=function(){
    return this.pages>300;
}   
//create book objects
const book1=new Book("Harry Potter","J.K. Rowling",500);
const book2=new Book("happiness","Bhavya",250);
const book3=new Book("The Hobbit","J.R.R. Tolkien",310);
const book4=new Book("Support hand","Bella",450);
const book5=new Book("Lazy","manasa",150);


// Display 
console.log(book1.getInfo())
console.log(book2.getInfo())    
console.log(book3.getInfo())
console.log(book4.getInfo())
console.log(book5.getInfo())
// Borrow 2 books and show their availability status
book1.borrow()
book3.borrow()
console.log(book1.isAvailable)
console.log(book3.isAvailable)
// Return 1 book and show updated status
book1.returnBook()
console.log(book1.isAvailable)
// Count how many books are "long books" (more than 300 pages)
let count=0;        
if(book1.isLongBook()){
    count++;
}
if(book2.isLongBook()){
    count++;
}
if(book3.isLongBook()){
    count++;
}       
if(book4.isLongBook()){
    count++;
}
if(book5.isLongBook()){
    count++;
}

console.log(`Number of long books: ${count}`)
// List all available books
let availableBooks=[];
if(book1.isAvailable){
    availableBooks.push(book1.getInfo())
}
if(book2.isAvailable){
    availableBooks.push(book2.getInfo())
}
if(book3.isAvailable){
    availableBooks.push(book3.getInfo())
}
if(book4.isAvailable){
    availableBooks.push(book4.getInfo())
}
if(book5.isAvailable){
    availableBooks.push(book5.getInfo())
}
console.log("Available Books:")
availableBooks.forEach(book=>console.log(book))

