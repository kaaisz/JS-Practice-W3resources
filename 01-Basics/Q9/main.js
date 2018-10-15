'use strict';
let today = new Date();//invoke current time
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();

let nextXmas = new Date(year, 11, 24);
console.log(nextXmas);

let yearForXmas = nextXmas.getFullYear();
let monthForXmas = nextXmas.getMonth()+1;
let dateForXmas = nextXmas.getDate();
const countForXmas = (yearForXmas + "-" + monthForXmas + "-" + dateForXmas);

//count
let count = nextXmas - today;
let daysCount = Math.floor((count / (1000 * 60 * 60 * 24)));
console.log(daysCount);

document.getElementById("nextXmas").innerHTML = countForXmas;
document.getElementById("count").innerHTML = daysCount;
