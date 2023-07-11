function MoveCharToTheEnd(str, char,newStr="",idx=0,count=0){

    if(idx === str.length){

        for(let i=0; i< count; i++){
            newStr += char;
        }

        return newStr;
    }

    // console.log(idx);
    
    if(str.charAt(idx) === char){
        count = count +1;
    }
    else{
        newStr += str.charAt(idx);
    }

    return MoveCharToTheEnd(str, char, newStr, idx+1, count)
}


console.log(
    MoveCharToTheEnd("xxxsacadcfsdfgfa","x")
);