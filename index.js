// ******  THIS CODE DOESN'T WORK, BUT WANTED IT JUST IN CASE  ************
// ****  FUNCTIONING CODE DEVELOPMENT HAS MOVED TO INDEX2.JS  ************


const todos = [];

document.getElementById("submitButton").addEventListener("click", handleClick);

document.querySelector(".list").addEventListener("click", function(e) {
    //var name = e.target.className;
    //if(e.target !== e.currentTarget) {
        
        const target = e.target.closest("#deleteID");

        if(target) {
            handleDelete(e);
            //createList();
        }
    //}
});


function handleClick() {
    
    let userInput = document.getElementById("todoInput").value;

    if(userInput != "") {
        todos.push(userInput);
        document.getElementById("todoInput").value = "";

        createList();
    }
    console.log(todos);
}

function handleDelete(specificTodo) {
    var name = specificTodo.target.id;
    todos.splice(0,1);
    document.getElementById(name).remove();
    
    
    console.log(specificTodo.target.className);
    console.log("delete worked");
    console.log(specificTodo.target);
    console.log(todos);

}

function createList() {
    
    let individualItem = "";
    let counter = 0;

    todos.forEach((item) => {
        individualItem += '<li>' + item + '<button id="deleteID" class="delete' + counter + '">delete</button></li> ';
        document.getElementById("actual").innerHTML = individualItem;
        counter++;
    });
    
}