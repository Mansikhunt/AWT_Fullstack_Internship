//using fuction name
function calAddition(n1,n2){
    return n1+n2;
}
console.log(calAddition(12,34));
document.write(calAddition(12,34));

//function without name-using variable declaration
const square = function(number){
    return number*number;
}
const x = square(4);
console.log(x);
document.write(x);

//arrow function
const a =["hydrogen","helium","lithium","boron"];

const a2 = a.map(function(s) {
    return s.length;
});

console.log("Normal Way",a2);
document.write("Normal Way",a2);

const a3 = a.map((s) => s.length);
console.log("using arrow function",a3);

//All function declaration are effectively at the top of the scope
console.log(square(5));
document.write(square(3));
