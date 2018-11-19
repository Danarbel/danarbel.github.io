window.onload = () => {
    const displayFullName = document.getElementById("fullName");
    const getFullName = document.getElementById("full-name")
    getFullName.onclick = () => {
        displayFullName.textContent = myObject.fullName();
    }
    const getNamesButton = document.getElementById("get-names");
    const displayName = document.getElementById("name");
    getNamesButton.onclick = () => {
        displayName.textContent = myObject.getname();
    }

}




const myObject = {
    firstName: "Dana",
    lastName: "Arbel",
    getname: function() {
        return this.firstName + " " + this.lastName;
    }
}

myObject.fullName = function() {
    return this.firstName + " "  + this.lastName;
}
console.log(myObject.firstName + " " + myObject.lastName);
console.log(myObject.getname());
console.log(myObject.fullName());

const functionObject = new FunctionObject
const FunctionObject = () => {
    console.log("my function object");
    const getName = () => {
        return "Function Object";

    }
    console.log(getName());
    functionObject.prototype.getFullName = () => {
        return "hi";
    }
}
functionObject();
console.log(getFullName());