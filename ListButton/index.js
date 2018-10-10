window.onload = () => {
    //part one
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');
//part two
    setTextButton.onclick = () => {
       userInput.value = 'The first item for my list';
    }
    //part three
}
listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}