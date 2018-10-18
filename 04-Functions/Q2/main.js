'use strict';
function isPalindrome(){
    //idenitfy input
    let input = document.getElementById("inputString").value;
    let length = input.length;
    // console.log(input);
    // console.log(input.length);

    //initialise value for pelindrome as true
    let identifier = true;

    //check condition until string.length ends
    for(let i = 0; i < length / 2; i++){
        if(input[i] != input[length - i - 1]){
            identifier = false;
        }
    }
    //show the output
    if (identifier){
        document.getElementById("result").innerHTML = "This is a pelindrome";
    }else{
        document.getElementById("result").innerHTML = "This is not a pelindrome";
    }
}



////////////sample code as php to understand logic////////////
// <? php

// class myClass {

//     public function myKaibun() {
//         $str = "racecar";
//         echo "Checking this word ----> ".$str. "<br>";
//         $len = strlen($str);
//         $palindrome = TRUE;
//         for ($x = 0; $x < $len / 2; $x++) {
//             if ($str[$x] != $str[$len - $x - 1]) {
//                 $palindrome = FALSE;
//             }
//         }
//         if ($palindrome) {
//             echo "Thid is palindrome word!<br>";
//         } else {
//             echo "This is not palindrome word!<br>";
//         }
//     }

// }

// $a = new myClass();
// $a -> myKaibun();
// ?>