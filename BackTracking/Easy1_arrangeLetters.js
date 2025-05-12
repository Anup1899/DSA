// Time Complexity ---> n*n!

function ArrangeLetters(str, permut=""){

    if(str.length === 0){
        console.log(permut);
        return;
    }

    for(let i=0; i<str.length; i++){
        const currentChar  = str.charAt(i);
        const newStr = str.substring(0,i) + str.substring(i+1);
        const newPermut =permut + currentChar;
        ArrangeLetters(newStr, newPermut)
    }
}


function ArrangeLetters(str, newStr=""){


    // Base Condition
    if(str.length === 0){
        console.log(newStr);
        return
    }

    let j= 0
    while(j < str.length){
        const newStr_1 = newStr+ str[j] 
        const newSubStr = str.substring(0, j) + str.substring(j+1);

        ArrangeLetters(newSubStr, newStr_1)
        j++
    }
}

ArrangeLetters("ABC")