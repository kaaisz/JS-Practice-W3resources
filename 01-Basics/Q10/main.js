'use strict';


function multiplyCalc(){
    let num1 = parseFloat(document.getElementById("1stnum").value);
    let num2 = parseFloat(document.getElementById("2ndnum").value);
    console.log("1st number is " + num1 + ", 2nd number is " + num2);
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideCalc() {
    let num1 = parseFloat(document.getElementById("1stnum").value);
    let num2 = parseFloat(document.getElementById("2ndnum").value);
    console.log("1st number is " + num1 + ", 2nd number is " + num2);
    document.getElementById("result").innerHTML = num1 / num2;
}