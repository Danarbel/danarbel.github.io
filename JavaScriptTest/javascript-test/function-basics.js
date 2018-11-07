

//function that defines one varibale and prints it
function simpleFunction()
{
   var simpleFunction = "simpleFunction";
   simpleFunction.prototype.description=
    "functions should consist of statements designed to perform a single task";
}

//fuction that get one var and prints it 
function  functionParameters(a){
    var functionParameters =" functionParameters";
    console.log(a)
}

//function that returns a string
function functionReturn (){
    return "Many functions return values"
}

//print call
console.log(simpleFunction.prototype.description)

//function with paramater call
a = "Many functions take parameters."
functionParameters(a)

//print the return value of the function call
console.log(functionReturn())

///=========================================////

window.onload = () => {
    const simpleFunction = document.getElementById('simple-function');
    const functionCalls = document.getElementById('function-calls');
 
}

function simple() {
    console.log('simple');
    simpleFunction.innerHTML = "simple";
    

}

function functionCalls ()
{
  //print call
console.log(simpleFunction.prototype.description)

//function with paramater call
a = "Many functions take parameters."
functionParameters(a)

//print the return value of the function call
console.log(functionReturn())  
}

functionCalls.onclick = simple;