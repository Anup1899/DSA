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


function FirstAndLastIndex(str, char ,idx = 0 ){
    if(idx === str.length){
        console.log(str.length);
        console.log(first);
        console.log(last);
        return;
    }

    if(str[idx]=== char){
        if(first === -1 && last === -1){
            first = last = idx;
        }
        else{
            last = idx;
        }
    }
    FirstAndLastIndex(str, char, idx+1)
}

FirstAndLastIndex("abcdeafghaijkal", "a",0)