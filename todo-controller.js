var itemList = document.getElementById('item-list');
var addToTodoItem = function (toDoText) {
    var li = document.createElement("li");
    li.innerText = toDoText;
    var xButton = document.createElement("button");
    xButton.innerText = "X";
    xButton.addEventListener('click', function () { return itemList.removeChild(li); });
    li.appendChild(xButton);
    itemList.appendChild(li);
};
var clickBox = document.getElementById('submit-item-button');
clickBox.addEventListener('click', function () {
    var userText = document.getElementById('input-box')['value'];
    addToTodoItem(userText);
    console.log("does it work");
});
