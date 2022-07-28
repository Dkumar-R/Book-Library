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
Display.prototype.add = function (book) {
    console.log("Adding to Web");
    tableBody = document.getElementById('tableBody')
    let UIString = `
                        <tr>
                        <td>${book.title}</td>
                        <td>${book.auther}</td>
                        <td>${book.type}</td>
                        </tr>`;
    tableBody.innerHTML+= UIString;
}


Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


// Add submit event when you clicked
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log('You have click submit');
    let title = document.getElementById('bookName').value;
    let auther = document.getElementById('Author').value;
    let Fiction = document.getElementById('Fiction');
    let Programing = document.getElementById('Programing');
    let Cooking = document.getElementById('Cooking');

    let type;
    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Programing.checked) {
        type = Programing.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }

    let book = new Book(title, auther, type,);
    console.log(book);

    // Display Method
    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();
}