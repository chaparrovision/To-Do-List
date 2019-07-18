var itemList = document.getElementById('item-list');

const addToTodoItem = function(toDoText:string) {
   
    var li = document.createElement("li");
    
    li.innerText = toDoText;
    var xButton= document.createElement("button");
    xButton.innerText="X";
    xButton.addEventListener('click', () => itemList.removeChild(li))
    li.appendChild(xButton);
    itemList.appendChild(li); 
}
let clickBox = document.getElementById('submit-item-button');

clickBox.addEventListener('click', () => {
    let userText:string = document.getElementById('input-box')['value'];
    addToTodoItem(userText);
    console.log("does it work")
});