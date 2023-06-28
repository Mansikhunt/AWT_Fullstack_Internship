let myvar;
myvar = 44;
myvar = String(44);
document.write(myvar," ",typeof(myvar));

// let d = new String(Date());
// console.log(d,typeof d);

let arr = String([1,2,3,4,5,6,7,8,9,10]);
console.log(arr.length,typeof arr);

//number() to String
document.write("<br/>"+Number("5.233088"));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number("5.sckd3"));

let numexp = 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(4));

let numfixed = 3.14;
document.write("<br/>"+numexp.toFixed( ));
document.write("<br/>"+numexp.toFixed(2));
document.write("<br/>"+numexp.toFixed(4));
document.write("<br/>"+numexp.toFixed(6));

let numprec = 3.14;
document.write("<br/>"+numexp.toPrecision( ));
document.write("<br/>"+numexp.toPrecision(2));
document.write("<br/>"+numexp.toPrecision(4));
document.write("<br/>"+numexp.toPrecision(6));

let val = 3.14;
document.write("<br/>",val.valueOf());
val =3.200
document.write("<br/>",val);


//Number,parseInt,parseFloat
document.write("<br/>"+Number(true));
document.write("<br/>"+Number(false));
document.write("<br/>"+Number("11"));
document.write("<br/>"+Number(" 11"));
document.write("<br/>"+Number("11 "));
document.write("<br/>"+Number(" 11 "));
document.write("<br/>"+Number("12.76"));
document.write("<br/>"+Number("45,64"));
document.write("<br/>"+Number("244 64"));
document.write("<br/>"+Number("ACD"));
document.write("<br/>"+Number(Date["12-2456-68"]));

//max number 
document.write("<br/>"+Number.MAX_VALUE_value);

//min number
document.write("<br/>"+Number.MIN_VALUEvalue);

//1/0
document.write("<br/>"+Number.POSITIVE_INFINITY);


//-1/0
document.write("<br/>"+Number.NEGATIVE_INFINITY);

//parseInt
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("year is :10"));

//parseFloat
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("year is :10"));

//Date-year,month,day,hour,minute,second,milisecond
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018, 11, 24, 10, 33, 30, 0));
document.write("<br/>"+new Date("October 13,2014 11:13:00"));



var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.tUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());

document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());

