'use strict';

function reverseNum(number){
    let num;
    let input = document.getElementById("inputNum").value;
    let reverse = input.split("").reverse().join("");
    console.log(reverse);
    document.getElementById("result").innerHTML = reverse;
}
