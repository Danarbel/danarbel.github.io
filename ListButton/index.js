

window.onload = () => {
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');

    setTextButton.onclick = () => {
       userInput.value = 'The first item for my list';
    }
}
listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}