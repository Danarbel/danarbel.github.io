window.onload=()=> {


    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        switch(value.toLowerCase()){
            case 'blue':
                setColor("blueBackground")
                showChoice(value)
                break
            case 'green':
                setColor("greenBackground")
                showChoice(value)
                break
             case 'red' :
                setColor("redBackground")
                showChoice(value)
                break
            case 'yellow' :
                setColor("yellowBackground")
                showChoice(value)
                break
             case 'purple' :
                setColor("purpleBackground")
                showChoice(value)    
           
            
            
        }
        // if (value.toLowerCase() === 'blue') {
        //     setColor("blueBackground");
        //     showChoice(value);
        // } else {
        //     setColor("greenBackground");
        //     showChoice(value);
        // }
        
    });
    
}
    
    let currentClass = null;
    
    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);        
        }
        currentClass = className;
        
        element.classList.add(className);


};
function showChoice(value) {
    const showIt = document.getElementById("user-choice");
    showIt.textContent = value;

}

