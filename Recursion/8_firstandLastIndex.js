let first= -1;
let last = -1;

function FirstAndLastIndex(str, idx=0, char){

    if(idx === str.length){
        console.log("First ", first);
        console.log("Last ", last);
        return;
    }

    if(char === str.charAt(idx)){

            if(first === -1){
                first = idx;
                last = idx;
            }
            else{
                last = idx
            }
    }


    FirstAndLastIndex(str, idx+1, char)

}


FirstAndLastIndex("abcdeafghaijkal", 0, "a");