window.onload = () => {
// Part I here
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
    // Part III here


listButton.onclick = () => {
    const myList = document.getElementById('list-data');
    elfCode.appendToList(myList, userInput.value);
}
}
