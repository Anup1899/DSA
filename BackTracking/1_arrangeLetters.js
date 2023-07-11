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

ArrangeLetters("ABC")