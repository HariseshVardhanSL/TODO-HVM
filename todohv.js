alert("Welcome!,you can create your schedule and deadline here😊")
const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
const inputdt = document.getElementById("inputdt");
function task(){
    if(inputbox.value === ''){
        alert("pls write your task😊")
    }
    else{
        var li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listcontainer.append(li);
        var span = document.createElement("span");
        span.className = "delete-btn";
        span.innerHTML = "\u00d7";
        li.append(span);
        var date = document.createElement("span");
        date.innerHTML = inputd.value;
        li.append(date);
        var time = document.createElement("span");
        time.innerHTML = inputt.value;
        li.append(time);
    }

    inputt.value=' ';
    inputd.value =' ';
    saveDate();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();  
        saveDate();
    }
    else if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveDate();
    }
});
function saveDate(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

