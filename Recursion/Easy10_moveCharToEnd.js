// function MoveCharToTheEnd(str, char,newStr="",idx=0,count=0){

//     if(idx === str.length){

//         for(let i=0; i< count; i++){
//             newStr += char;
//         }

//         return newStr;
//     }

//     // console.log(idx);
    
//     if(str.charAt(idx) === char){
//         count = count +1;
//     }
//     else{
//         newStr += str.charAt(idx);
//     }

//     return MoveCharToTheEnd(str, char, newStr, idx+1, count)
// }


// console.log(
//     MoveCharToTheEnd("xxxsacadcfsdfgfa","x")
// );

// function MoveCharToTheEnd(str, char, newStr="",idx=0, repeat=""){
    
//     if(idx === str.length){
//         const st = newStr + repeat
//         console.log(st);
//         return;
//     }

//     if(str[idx] === char){
//         repeat += char;
//     }else{
//         newStr += str[idx]
//     }

//     MoveCharToTheEnd(str,char, newStr, idx+1, repeat)
// }


function MoveCharToTheEnd(str, char, newStr="", chrStr="", idx = 0){

    if(idx=== str.length){
        console.log( newStr + chrStr);
        return;
    }

    if(str[idx] === char){
        chrStr += str[idx]
    }
    else{
        newStr += str[idx]
    }

    MoveCharToTheEnd(str, char, newStr, chrStr, idx+1)
}
MoveCharToTheEnd("abcdexxfghxijkxxxl", "x")