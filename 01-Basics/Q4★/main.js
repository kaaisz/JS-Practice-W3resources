'use strict';
function triangle(number){
    const sideA = 5;
    const sideB = 6;
    const sideC = 7;

    //calc area from helon's formula(from 3 side)
    let area = (sideA + sideB + sideC) / 2
    console.log(area);

    return area;
}
document.getElementById("result").innerHTML = triangle(5, 6, 7);