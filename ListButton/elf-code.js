

window.onload = () => {
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');

    setTextButton.onclick = () => {
       userInput.value = 'The first item for my list';
    }
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }}