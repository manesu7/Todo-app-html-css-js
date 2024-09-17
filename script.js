const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === ''){
         alert("Type a task here");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(element){
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("checked");
        saveData();
    }
    else if(element.target.tagName === "SPAN"){
        element.target.parentElement.remove();
        saveData();
    }
}, false);
//listContainer.addEventListener("click", function(element){---}, false);

//Saving tasks in local storage's data variable, save data in browser, even after closing and the opening browser Chrome
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//Retrieve tasks from local storage, showing tasks after opening a new session in browser Chrome
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//removing tasks list from a browser Chrome, everytime new  session is with empty list of tasks
function deleteDataFromBrowser(){
    localStorage.removeItem("data");
}

deleteDataFromBrowser();