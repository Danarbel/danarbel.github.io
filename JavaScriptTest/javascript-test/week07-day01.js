let  num = 3;
const numberstring = '3';
const rain = false;

console.log (num,numberstring);
console.log(typeof num,typeof numberstring,typeof rain);
console.log(num + numberstring);
console.log (typeof num);

if (rain===true){
    console.log('go to the gym');
} else {
    console.log ('go for a walk');

}
num = 5 ;
console.log ('modulus test for even',num % 2);
console.log ('modulus test for even',( num %  2) === 0);
num = 4 ;
console.log ('modulus test for even', (num % 2) ===0);

function evenOrodd(value){
if((value % 2)=== 0 ) {
    console.log('the number' , + value + 'is even.');
}
        else { 
            console.log ('the number', +value + 'is odd.');
        }
    }

evenOrodd (4);
evenOrodd(15);

var app = {
    isEven: function(input){
        if (input % 2 === 0 ){
            console.log ('your input of ' + input + 'is even.');
        
        }else {
            console.log ('your input of ' + input + 'is odd.')
        }
    }
}

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);