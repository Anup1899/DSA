function printNum(int){
    if(int === 0)return;

    printNum(int-1)
    console.log(int);

    
}

printNum(5);