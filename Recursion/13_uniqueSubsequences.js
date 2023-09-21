function UniqueSubsequences(str, set, newString="", idx=0){

    if(idx === str.length){
        
        if(!set.has(newString)){
            set.add(newString);
            // console.log(newString);
        }

        return;
    }

    const char = str.charAt(idx);

    // With 
    UniqueSubsequences(str, set, newString + char, idx+1);
    // Without
    UniqueSubsequences(str, set, newString, idx+1)
}


const newSet = new Set();
UniqueSubsequences("aaa", newSet);

console.log(newSet);

