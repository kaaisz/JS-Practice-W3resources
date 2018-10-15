'use strict';
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth()+1;
const date = time.getDate();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = time.getDay();
console.log(year + "/" + month + "/" + date + "/" + weekDay[day])//current time

//until 2050, find the year which is begin from sunday
function findSunday(){
    let tmp = [];
    for (let year = 2014; year <= 2050; year++) {
        let timeJan1st = new Date(year, 0, 1);
        let yearJan1st = timeJan1st.getFullYear();
        let monthJan1st = timeJan1st.getMonth()+1;
        let dateJan1st = timeJan1st.getDate();
        let dayJan1st = timeJan1st.getDay();
        if (dayJan1st === 0) {
            tmp.push(yearJan1st + "-" + monthJan1st + "-" + dateJan1st + ", " + weekDay[dayJan1st]);
            console.log(tmp);
        }
    }
    const result = tmp.join("<br>");
    console.log(result);
    return result;
}

document.getElementById("result").innerHTML = findSunday();
