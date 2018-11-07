var Test01 = function()
{
   var name = "Test01";
}

Test01.prototype.description="This is a test object";

var Test02 = function()
{
    var test01 = new Test01();
    $("#Description01").html(test01.description);
    $("#Name01").html(test01.name);
    console.log(Test01.name)
}
console.log(Test01.name)