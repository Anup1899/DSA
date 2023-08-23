// function checkSortedArray(arr, idx=0){


//     if(idx === arr.length - 1){
//         return true;
//     }

//     if(arr[idx] >= arr[idx+1]){
//         return false;
//     }

//   return checkSortedArray(arr, idx+1);
// }

// console.log(
//     checkSortedArray([1,2,2,3,4,5])
//     );


function checkSortedArray(arr, idx = 0){
    if(idx === arr.length){
        console.log(true);
        return
    }


    if(idx === 0){
        checkSortedArray(arr, idx+1)
    }
    else{
        if(arr[idx] >= arr[idx -1]){
        return checkSortedArray(arr, idx+1)
        }
        else{
            console.log(false);
            return
        }
    }
}

checkSortedArray([1,2,3,4,5,6])
checkSortedArray([1,2,3,4,6,5])