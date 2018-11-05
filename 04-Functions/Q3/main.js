'use strict';

function separateString(String){
    let arr = [];
    let string = "dog";

    for (let i = 0; i < string.length; i++) {
        //// var result1 = string.substr(0, 1) + string.substr(0, 2) + string.substr(0, 3);
        var result1 = string.substr(i, i + string.length - 2);
        var result2 = string.substr(i, i + string.length - 1);
        var result3 = string.substr(i, i + string.length);
        // for(let r = 0; r>string.length; i--){
        //     var result = string.substr(r, r + string.length-i);
        // }
        arr.push(result1, result2, result3);
    }
    const html = arr.join(",");

    console.log(arr);
    console.log(html);
    return html;
}

document.getElementById("result").innerHTML = separateString();


