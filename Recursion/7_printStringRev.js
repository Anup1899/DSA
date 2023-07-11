function PrintStringReverse(str, idx = str.length-1){

    if(idx === -1){
        return;
    }
    console.log(str[idx]);
    PrintStringReverse(str, idx-1);

}

// PrintStringReverse("ABCDE")
PrintStringReverse("")