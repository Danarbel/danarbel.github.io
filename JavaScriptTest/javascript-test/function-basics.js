window.onload=()=> {
 

    const functionCalls = document.getElementById('function-calls');
    const CallUserInput = document.getElementById('call-user-input');


    functionCalls.onclick=()=> 
    {
      simpleFunction(); 
      functionParameters("Many functions take parameters.");
      functionReturn("Many functions return values");

      const returnValue=functionReturn("Many functions return values");
      console.log (returnValue);
     
             }
    
 
CallUserInput.onclick=()=> {
    const UserInputParagraph=document.getElementById("show-user-input");
    const UserInput =document.getElementById("user-input");
UserInputParagraph.textContent=UserInput.value;
}}

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
    const functionparametersParagraph = document.getElementById("function-parameters");
    functionparametersParagraph.textContent= a;
    console.log(a)
}

//function that returns a string
function functionReturn (){
    return "Many functions return values";
    
}



//function with paramater call
a = "Many functions take parameters."




//simpleFunction()




