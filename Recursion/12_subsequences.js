// IMPORTANT QUESTION

// Time Complexity
    // Depends on the number of times the function is getting called
    // For Every character the are two possibilites
    // 1 + 2 + 2^1 + 2^2 + ..... 2^n  ---> Geometric Progression
    // Total nodes asymtodically ---> 2^n

//Total number of Combinations of Strings are 2^n

// function printAllSubsequences(str, newStr = "", idx = 0) {
//   if (idx === str.length) {
//     console.log(newStr);
//     return;
//   }

//   const char = str.charAt(idx);

//   // With Char
//   printAllSubsequences(str, newStr + char, idx + 1);
//   // Without Char
//   printAllSubsequences(str, newStr, idx + 1);
// }

function printAllSubsequences(str, newStr="", idx=0){

  if(idx === str.length){
    console.log(newStr);
    return;
  }

  const charAtidx = str[idx];

  // console.log(str, newStr, idx);
  
  // With Char
  printAllSubsequences(str, newStr + charAtidx, idx+1);

  // Without Char
  printAllSubsequences(str, newStr, idx+1)


}

printAllSubsequences("abc");
