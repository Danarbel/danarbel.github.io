var person = {
    firstName: "Dana",
    lastName: "Arbel",
    fullName: function() {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};
 
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());


var calculator={
    operand01:0,
    operand02: 0,

addProperties : function() {'use strict';
    return this.operand01 + this.operand02;
},
substractProperties:function (){'use strict';
return this.operand01-this.operand02;
}
,
multiplyProperties : function() {'use strict';
return this.operand01 * this.operand02;
},
}


calculator.operand01 = person.firstName=4;
calculator.operand02=person.lastName=5;
function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}
divider('Calculator');


console.log('operand01 =', calculator.operand01);
console.log('operand02=' ,calculator.operand02);
console.log('Add:' ,calculator.addProperties());
console.log('Subtract:',calculator.substractProperties());
console.log('Multiply:',calculator.multiplyProperties());


