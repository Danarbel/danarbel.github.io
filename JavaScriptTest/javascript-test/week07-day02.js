var showmessage =(message) => {

    console.log("=============");
    console.log("====" + message);
    console.log("===============")
}

showmessage('operatoe precedence');

let result= 1 + (2 * 3)
console.log(result);


result= (1+2) *3
console.log(result);

showmessage('for loops');

for(let i =10; i<=25; i= i+2){
    console.log(i)
}

showmessage('while loops')
let looper=10;
while(looper < 15){
    console.log(looper++);
}

do {
    console.log(looper++);

}

while (looper<20);