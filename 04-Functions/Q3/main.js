'use strict';

const fullDate = new Date();

function currentday(){
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = fullDate.getDay();
    return "Today is : " + weekday[day];
}

document.getElementById("today").innerHTML = currentday();


function currentTime(){
    let head;
    let hour = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    if (hour >= 12) {
        hour = hour - 12;
        head = "PM";
    } else {
        head = "AM";
    }

    return "Current time is : " + hour + head + " : " + min + " : " + sec;
}

document.getElementById("currentTime").innerHTML = currentTime();