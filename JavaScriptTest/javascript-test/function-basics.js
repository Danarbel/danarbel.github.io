window.onload=()=> {
 

    const functionCalls = document.getElementById('function-calls');

    functionCalls.onclick=()=> 
    {
      simpleFunction();
    }
}

//function that defines one varibale and prints it
function simpleFunction(){
    const displaytext= "functions should consist of statements designed to perform a single task"
const simpleFunctionParagraph = document.getElementById("simple-function");
console.log(displaytext);
simpleFunctionParagraph.textContent= displaytext;
}

//fuction that get one var and prints it 
function  functionParameters(a){
    var functionParameters =" functionParameters";
    console.log(a)
}

//function that returns a string
function functionReturn (){
    return "Many functions return values";
}



//function with paramater call
a = "Many functions take parameters."
functionParameters(a)

//print the return value of the function call
console.log(functionReturn());
//simpleFunction()




