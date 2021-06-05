var lsit = document.getElementById("list");
function addTodo(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement("li");
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText);
    
    var editBtn =document.createElement("img");
    editBtn.setAttribute("src","edit.png");
    // editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn");
    li.appendChild(editBtn); 
    var delBtn =document.createElement("img");
    delBtn.setAttribute("src","delete.png");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)");
    // delBtn.appendChild(delText);
    li.appendChild(delBtn);

    li.setAttribute("class","li")
    lsit.appendChild(li);
    editBtn.setAttribute("onclick","editItem(this)");
    todo_item.value=""
}
function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    lsit.innerHTML="";
}
function editItem(e){
    var val =prompt("Enter update value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=val;
} 