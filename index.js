console.log("Our Book Library was");

function Book(title, auther, type) {
    this.title = title;
    this.auther = auther;
    this.type = type;

}

// Display 
function Display() {

}

// Add method to display prototype.




// Add submit event when you clicked
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have click submit');
}