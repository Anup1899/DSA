function reverserArray(arr, i=0, j= arr.length -1){
    if(i>=j){
        return arr;
    }

    // swap
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    return reverserArray(arr, ++i, --j)
}


console.log(
    reverserArray([1,2,3,4])
)