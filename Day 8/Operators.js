let n1 = 12, n2 = 24;
var sum = n1+n2, mul = n1*n2, sub = n1-n2, div = n1/n2, mod = n1%n2;
var exponentiation = 4**2;

document.write("<br/>sum ",sum+
"<br/>mul ",mul+
"<br/>sub ",sub+
"<br/>div ",div+
"<br/>modulo ",mod+
"<br/>inc. ",n1++ +
"<br/>dec. ",n1-- +
"<br/>",++n1 +
"<br/>",--n1 +
"<br/>exponent ",exponentiation);

//== equal to
if(n1==13){
    document.write("<br/>same!");
}
else{
    document.write("<br/>not same!")
}

if(n1===12){
    document.write("<br/>same!");
}
else{
    document.write("<br/>not same!")
}

//instanceof operator
var a =["Mansi","Madhavi"];
document.write(a instanceof Array);
document.write("<br/>");
document.write(a instanceof Boolean);
document.write("<br/>");

//StringOperator
let s1 = "Khunt";
let s2 = "Mansi";
let s3 = s1+" "+s2;
document.write(s3);