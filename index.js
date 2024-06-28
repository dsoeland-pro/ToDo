const todos = [];

document.getElementById("submitButton").addEventListener("click", handleClick);


function handleClick() {
    
    let userInput = document.getElementById("todoInput").value;
    todos.push(userInput);

    console.log(userInput);
}