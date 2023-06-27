//Object 
var obj = new Object();
document.write("<br/>"+typeof(obj));

document.write("<br/>"+obj.Firstname+" "+obj.Lastname);

//create a user define object
var car= {
    modal: "BMW X3",
    color: "White",
    doors: 5

}
document.write("<br>"+car.modal+" "+car.color+" "+car.doors);

//Array datatype
var cars =["BMW","Mercedes","Creta"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);
document.write("<br/>"+cars[3]);


//Function Datatype
var demo = function(){
    return "Welcome to javascript";
}
document.write("<br/"+typeof(demo));
document.write("<br/>"+demo());

