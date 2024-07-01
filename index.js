const todos = ["todo1"];

document.getElementById("submitButton").addEventListener("click", handleClick);


function handleClick() {
    
    let userInput = document.getElementById("todoInput").value;
    todos.push(userInput);
    document.getElementById("todoInput").value = "";

    let individualItem = "";
    todos.forEach((item) => {
        individualItem += "<li>" + item + "</li>";
        document.getElementById("actual").innerHTML = individualItem;
     }) 

    console.log(todos);
}