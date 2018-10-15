'use strict';

let string1 = "file.php";
let string2 = "filenamewaswrong.js";

//sprit by "."
let spritString1 = string1.split('.');
// console.log(spritString1);//["file", "php"]
// console.log(spritString1[1]);
let lastPartofString1 = spritString1.pop();
console.log(lastPartofString1);
document.getElementById("result1").innerHTML = lastPartofString1;

let spritString2 = string2.split('.');
// console.log(spritString2);//["filenamewaswrong", "js"]
// console.log(spritString2[1]);
let lastPartofString2 = spritString2.pop();
console.log(lastPartofString2);
document.getElementById("result2").innerHTML = lastPartofString2;