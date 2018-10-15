'use strict';
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth()+1;
var day = time.getDate();

console.log(year);
console.log(month);
console.log(day);

document.getElementById("MDYHyphen").innerHTML = (month + "-" + day + "-" + year);
document.getElementById("MDYSlash").innerHTML = (month + "/" + day + "/" + year);
document.getElementById("DMYHyphen").innerHTML = (day + "-" + month + "-" + year);
document.getElementById("DMYSlash").innerHTML = (day + "/" + month + "/" + year);
