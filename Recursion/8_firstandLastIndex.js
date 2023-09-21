let first= -1;
let last = -1;

// function FirstAndLastIndex(str, idx=0, char){

//     if(idx === str.length){
//         console.log("First ", first);
//         console.log("Last ", last);
//         return;
//     }

//     if(char === str.charAt(idx)){

//             if(first === -1){
//                 first = idx;
//                 last = idx;
//             }
//             else{
//                 last = idx
//             }
//     }


//     FirstAndLastIndex(str, idx+1, char)

// }


// FirstAndLastIndex("abcdeafghaijkal", 0, "a");

let firstIdx = -1;
let lastIdx = -1;
function FirstAndLastIndex(str, char, index=0){

    if(index=== str.length){
        console.log("First IDX", firstIdx);
        console.log("Last IDX", lastIdx);
        return;
    }

    if(str[index] === char){

        if(firstIdx === -1 && lastIdx === -1 ){
            firstIdx = index;
            lastIdx = index;   
        }
        else{
            lastIdx = index
        }
    }

    FirstAndLastIndex(str,char, index+1)

}

FirstAndLastIndex("abcdeafghaijkal", "a", 0)
