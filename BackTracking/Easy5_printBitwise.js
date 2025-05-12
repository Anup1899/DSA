function PrintBitwise(n, array = new Array(n)){

    if(n < 1){
        console.log(array);
        return;
    }

    array[n-1] = 0;
    PrintBitwise(n-1, array);
    array[n-1] = 1;
    PrintBitwise(n-1, array);
}


PrintBitwise(2)
