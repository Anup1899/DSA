function SubSet(n, arr=  new Array(), count =0){

    if(n===0){
        console.log(count);
        console.log(arr);
        return;
    }

    // Add
    arr.push(n)
    SubSet(n-1, arr, count+1)

    // Remove
    arr.pop()
    SubSet(n-1, arr, count+1)
}

    SubSet(4)