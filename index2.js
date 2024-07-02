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



// *** Ends the making of the list of Todos ***











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
           //console.log("delete button hit");
            handleDelete(e);
        });
    }

    for(var i = 0; i < document.querySelectorAll(".edit").length; i++) {
        
        document.querySelectorAll(".edit")[i].addEventListener("click", function(e) {
            //console.log("edit button hit");
            handleEdit(e);
        });
    }

}




function handleDelete(e) {
        
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
    let lengthOfId = 6;
    for(let i = lengthOfId; i < longest.length; i++) {
        buttonNumber += longest[i];
    }


    todos.splice(Number(buttonNumber),1);

    if(todos.length !== 0) {
        createList();
    }else{
        document.getElementById("delete0").remove();
    }

    
    console.log(todos);


}

function handleEdit(e) {
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
    console.log(longest);


    let buttonNumber = "";
    let lengthOfId = 4;
    for(let i = lengthOfId; i < longest.length; i++) {
        buttonNumber += longest[i];
    }
    console.log(buttonNumber);


    let editedTodo = prompt("Edit your todo....");
    //console.log(typeof(editedTodo));

    if(editedTodo != null) {
        todos[buttonNumber] = editedTodo;
    }

    
    if(todos.length !== 0) {
        createList();
    }

    console.log(todos);
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