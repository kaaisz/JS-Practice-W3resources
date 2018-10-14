'use strict';
let head;
let date = new Date();//get whole information of current time
let day = date.getDay()//get current day
let hour = date.getHours();//get current hours
let minute = date.getMinutes();//get current minutes
let second = date.getSeconds();

//make array to show day properly
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//identify AM or PM
if (hour >= 12){
    hour = hour-12;
    head = "PM";
}else{
    head = "AM";
}

document.getElementById("today").innerHTML = (weekday[day]);
document.getElementById("currentTime").innerHTML = (hour + head + " : " + minute + " : " + second);
