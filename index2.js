const todos = [];

// *** The following will capture and hold the items of the Todo List, by way of array.

document.getElementById("submitButton").addEventListener("click", handleClick);

function handleClick() {
    
    let userInput = document.getElementById("todoInput").value;

    if(userInput != "") {
        todos.push(userInput);
        document.getElementById("todoInput").value = "";

        createList();
    }
    console.log(todos);
}



// *** Creates the <li> items, which includes the TODO, an EDIT button, and DELETE button ***
// *** Adds an eventlistener to every button


function createList() {
    
    let individualItem = "";
    let counter = 0;

    todos.forEach((item) => {
        individualItem += '<li id="delete' + counter + '" id="edit' + counter + '">' + item + '<button class="edit' + counter + ' edit"> edit</button><button class="delete' + counter + ' delete"> delete</button></li> ';
        document.getElementById("listItems").innerHTML = individualItem;
        counter++;
    });

    for(var i = 0; i < document.querySelectorAll(".delete").length; i++) {
        
        document.querySelectorAll(".delete")[i].addEventListener("click", function(e) {
            handleDelete(e);
        });
    }

    for(var i = 0; i < document.querySelectorAll(".edit").length; i++) {
        
        document.querySelectorAll(".edit")[i].addEventListener("click", function(e) {
            handleEdit(e);
        });
    }

}




// *** Deletes element from the array and the entire <li> that correspond with the deleted array element,
// *** then replaces all the remaining <li> items, updating the id attribute to correspond with the items new position within the array.

// *** There was an issue with the last <li> not getting removed from the html, but getting removed from the array,
// *** the conditional fixes that problem.

function handleDelete(e) {
        
    let lengthOfId = 6;
    let buttonNumber = getIdAttri(e, lengthOfId);

    todos.splice(Number(buttonNumber),1);

    if(todos.length !== 0) {
        createList();
    }else{
        document.getElementById("delete0").remove();
    }

}


// *** Edits an array element using prompt to get the new input from the user.
// *** Then list is updated to reflect the change.
// *** The cancel button is null, to prevent null being the change, the conditional prevents changes unless there is something in the text field.

function handleEdit(e) {
    
    let lengthOfId = 4;
    let buttonNumber = getIdAttri(e, lengthOfId);

    let editedTodo = prompt("Edit your todo....");
    
    if(editedTodo != null) {
        todos[buttonNumber] = editedTodo;
    }

    createList();
    
}


// *** Finds the id attribute of the parent of the button. Otherwise only the button is affected by changes with the handleDelete and handleEdit

function getIdAttri (e, lengthOfId) {
    let classesString = e.target.className;
    
    let classes = [];
    classes = classesString.split(' ');

    let leng = 0;
    let longest;

    for (var i = 0; i < classes.length; i++) {
        if(classes[i].length > leng) {
            leng = classes[i].length;
            longest = classes[i];
        }
    }
    
    let buttonNumber = "";
    
    for(let i = lengthOfId; i < longest.length; i++) {
        buttonNumber += longest[i];
    }
    
    return buttonNumber;
}
























//  ****************  UNNEEDED CODE, but might be useful elsewhere. It did work....  **************************
    //let specificID = longest;
    // let parentNode = document.querySelector('.' + longest).closest("li");
    // let specificID = parentNode.getAttribute('id');


    // console.log(document.getElementById(specificID));
    // document.getElementById(specificID).remove();
    

    //console.log(longest);
    //console.log(buttonNumber);

    //console.log(specificTodo.className);
    
    //console.log("delete worked");
    //console.log(specificTodo.target);
    //console.log(classes);