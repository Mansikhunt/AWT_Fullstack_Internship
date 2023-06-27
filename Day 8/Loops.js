//do while
let  j = 0;
do{
    document.write("<br/>"+j);
    j++;
}while(j<=10);
document.write("<hr/>")


//while
let i = 0;
while(i<=5){
    document.write("<br/>",i);
    i++;
}
document.write("<hr/>")


//for
for(i=0;i<5;i++){
    document.write("<br/>",i)
}
document.write("<hr/>");


//for in
const person = {fname:"Mansi", lname:"Khunt", age:19}; 

for (let x in person) {
  document.write("<br/>",x);
}
document.write("<br/>");
for (let p in person) {
    document.write("<br/>"+person[p]);
  }
  document.write("<hr/>");


//for of
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  document.write("<br/>"+x);
}