// function PrintStringReverse(str, idx = str.length-1){

//     if(idx === -1){
//         return;
//     }
//     console.log(str[idx]);
//     PrintStringReverse(str, idx-1);
// }


function PrintStringReverse(str, idx= str.length - 1, newStr = ""){
    if(idx === 0){
        newStr = str[str.length -1]
        return newStr
    }

   let newS =  PrintStringReverse(str, idx-1, newStr)
   return newS += str[str.length -1 - idx]
}

console.log(
    PrintStringReverse("ABCDE")
);
// PrintStringReverse("")