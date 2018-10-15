'use strict';
let min = 1;
let max = 10;
let number = Math.floor(Math.random()*(+max - +min))+min;
// console.log(number);

function clicker(){
    let userInput = parseInt(document.getElementById("txt").value);
    // let numberInput = Math.floor(Math.random() * (+maxInput - +minInput)) + minInput;
    document.getElementById("result-details").innerHTML = ("Actual number is : "+number+"<br>Number you added is "+userInput);
    if(number == userInput){
        document.getElementById("result").innerHTML = ("Good Work!");
    }else{
        document.getElementById("result").innerHTML = ("Not Matched");
    }
}
