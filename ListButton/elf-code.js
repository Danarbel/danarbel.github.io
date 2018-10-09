window.onload = () => {

    const setTextButton = document.getElementById('set-text');
    const userInput = document.getElementById('list-data');
   
    const listButton = document.getElementById('add-to-list');
const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}


listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}
}
