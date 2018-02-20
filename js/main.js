function grabTodo() {
	let list = document.getElementById("todoList").value;
	let textList = document.createTextNode(list);

	let listItem = document.createElement("li");
	listItem.appendChild(textList);
	document.getElementById("listItemHere").appendChild(listItem)
}