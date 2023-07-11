function checkSortedArray(arr, idx=0){

    if(idx === arr.length - 1){
        return true;
    }

    if(arr[idx] >= arr[idx+1]){
        return false;
    }

  return checkSortedArray(arr, idx+1);
}

console.log(
    checkSortedArray([1,2,2,3,4,5])
    );