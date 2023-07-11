const alphabetArr = new Array(26).fill(false)

function RemoveDuplicates(str,newStr="", idx=0){

    if(idx === str.length){
        return newStr;
    }

    const letter = str.charAt(idx);
    const char =  letter.charCodeAt(0) - "a".charCodeAt(0);
    const checkAvailable = alphabetArr[char];

    // console.log(letter - "a");

    // console.log(checkAvailable);
    
    if(!checkAvailable){
        newStr += letter;
        alphabetArr[char] = true;
    }

    return RemoveDuplicates(str, newStr, idx+1)
}

console.log(
    RemoveDuplicates("aaabbbcccc")
);