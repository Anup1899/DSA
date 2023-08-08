// function PrintStringReverse(str, idx = str.length-1){

//     if(idx === -1){
//         return;
//     }
//     console.log(str[idx]);
//     PrintStringReverse(str, idx-1);
// }


function PrintStringReverse(str, idx= str.length - 1, newStr = ""){
    if(idx === -1){
        return newStr
    }
    newStr += str[idx]
    return PrintStringReverse(str, idx-1, newStr)
}

console.log(
    PrintStringReverse("ABCDE")
);
// console.log(
//     PrintStringReverse("")
// );