
window.onload = () => {

    const simpleObjectAction = document.getElementById("simple-object-action");
    const simpleObjectDisplay = document.getElementById("simple-object-display");
    simpleObjectAction.onclick = () => {
        simpleObjectDisplay.textContent = simpleObject.sayName();
    }
    const functionObjectAction = document.getElementById("function-object-action");
    const functionObjectDisplay = document.getElementById("function-object-display");
    functionObjectAction.onclick = () => {
        functionObjectDisplay.textContent = privateFunction();
    }
    const customClassAction = document.getElementById("custom-class-action");
    const costumeClassDisplay = document.getElementById("custom-class-display");
    customClassAction.onclick = () => {
        costumeClassDisplay.textContent = customClass.sayName();
    }

simpleObject = {
    sayName: function() {
        console.log("Simple Object");
        return "Simple Object";
    }
}
simpleObject.dynamicMethod = function() {
    console.log("Dynamic Method");
    return "Dynamic Method";
}

function privateFunction() {
    sayName = function() {
        console.log("Private Function")
        return "Private Function";
    }
    return sayName();
}
class CustomClass {
    sayName() {
        console.log("Custom Class")
        return "Custom Class";
    }


}
}
 custom = new CustomClass; 