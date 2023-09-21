// const alphabetArr = new Array(26).fill(false)


// function RemoveDuplicates(str,newStr="", idx=0){

//     if(idx === str.length){
//         return newStr;
//     }

//     const letter = str.charAt(idx);
//     const char =  letter.charCodeAt(0) - "a".charCodeAt(0);
//     const checkAvailable = alphabetArr[char];

//     // console.log(letter - "a");

//     // console.log(checkAvailable);
    
//     if(!checkAvailable){
//         newStr += letter;
//         alphabetArr[char] = true;
//     }

//     return RemoveDuplicates(str, newStr, idx+1)
// }

// console.log(
//     RemoveDuplicates("aaabbbcccc")
// );


// function RemoveDuplicates(str, newStr="", arr = new Array(26).fill(false), idx = 0){
    
//     if(idx === str.length){
//         console.log(newStr);
//         return
//     }

//     const char =  str[idx]

//     if(char >= "A" && char <= "Z"){
//         const index =  char.charCodeAt(0) - "A".charCodeAt(0)
//         if(!arr[index]){
//             arr[index] = true
//             newStr  += char
//         }
//     }else if(char >= "a" && char <= "z"){
//         const index =  char.charCodeAt(0) - "a".charCodeAt(0)
//         if(!arr[index]){
//             arr[index] = true
//             newStr  += char
//         }
//     }
//     else{
//         newStr += char
//     }

//     RemoveDuplicates(str, newStr, arr, idx+1)

// }

// function RemoveDuplicates(str, newStr="", idx = 0, arr=  new Array(26).fill(false)){

//     if(idx === str.length){
//         console.log(newStr);
//         return
//     }

//     const char = str[idx];

//     const index =  char - "a"
     
//     if(arr[index] === false){
//         newStr += char;
//         arr[index] = true;
//     }

//     RemoveDuplicates(str, newStr, idx+1 ,arr)

// }

RemoveDuplicates("aabbccddee")