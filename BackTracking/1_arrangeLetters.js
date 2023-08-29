// Time Complexity ---> n*n!

// function ArrangeLetters(str, permut=""){

//     if(str.length === 0){
//         console.log(permut);
//         return;
//     }

//     for(let i=0; i<str.length; i++){
//         const currentChar  = str.charAt(i);
//         const newStr = str.substring(0,i) + str.substring(i+1);
//         const newPermut =permut + currentChar;
//         ArrangeLetters(newStr, newPermut)
//     }
// }


function ArrangeLetters(str, newStr=""){

    if(str.length ===0){
        console.log(newStr);
        return;
    }
    
    for(let i=0; i< str.length; i++){
        const char = str[i];
        const rest_str = str.substr(0,i) + str.substr(i+1);
        ArrangeLetters(rest_str, newStr + char)
    }
}

ArrangeLetters("ABC")