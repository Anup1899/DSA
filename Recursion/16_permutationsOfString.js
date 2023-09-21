// Time Complexity ---> n!

// const printPermutation = (str, permutation="") =>{

//     if(str.length === 0){
//         console.log(permutation);
//     }

//     for(let i=0; i< str.length; i++){
//         const char = str.charAt(i);
//         const newString = str.substring(0,i) + str.substring(i+1);
//         printPermutation(newString, permutation+char)
//     }

// }

// printPermutation("abc")


function printPermutation(str, permutation=""){

    if(str.length === 0){
        console.log(permutation);
        return;
    }

    for(let i =0; i<str.length; i++){
        const currChar = str[i];
        const newSubStr = str.substr(0,i) + str.substr(i+1);
        printPermutation(newSubStr, permutation + currChar);
    }

}

printPermutation("ABC")