const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask() {

    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "X"
    li.appendChild(span);
    
    inputbox.value="";

}


listcontainer.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    } 
    else {
        console.log("Check");
    }

})


