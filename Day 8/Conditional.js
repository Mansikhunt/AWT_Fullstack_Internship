//if
let a = 1;
if(a<5){
    document.write("a is less than 5");
}
document.write("<br/>");


//if else
let b =3;
let c = 4;
if(b>c){
    document.write("b is greater than c");
}
else{
    document.write("c is greater than b");
}
document.write("<br/>");


//else if
if(a>=b){
    document.write("a is greater than b");
}
else if(a==b){
    document.write("a equals to b");
}
else{
    document.write("b is greater than a");
}
document.write("<br/>");

//switch case
var day =2;
switch(day){
    case 1:
        document.write("Sunday");
        break;
    case 2:
        document.write("Monday");
        break;
    default:
        document.write("Invalid choice");
        break;
}
document.write("<br/>");


var day = "Tuseday";
switch(day){
    case "Tuseday":
        document.write("Third day!");
        break;
    case "Thursday":
        document.write("Fifth day!");
        break;
}
document.write("<br/>");


var d = false;
switch(d){
    case true:
        document.write(1);
        break;
    case false:
        document.write(0);
        break;
}