const todos = [];

document.getElementById("submitButton").addEventListener("click", handleClick);

document.addEventListener("click", function(e) {
    
    const target = e.target.closest(".delete1");

    if(target) {
        handleDelete(e);
        //createList();
    }
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
    var name = specificTodo.target.className;
    todos.splice(0,1);
    
    
    console.log(name);
    console.log("delete worked");
    console.log(specificTodo.target);
    console.log(todos);

}

function createList() {
    
    let individualItem = "";
        todos.forEach((item) => {
            individualItem += '<li>' + item + '</li> <button class="delete1">delete</button>';
            document.getElementById("actual").innerHTML = individualItem;
        
        });
    
}