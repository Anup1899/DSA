// Given:--- My Array will always be a mountain array
// Mountain Array means sorted rotated array

function findPivotIndex(arr, start=0, end = arr.length -1){

    if(start >= end){
        return start;
    }

    const mid = Math.ceil(start + (end-start)/2 )
    
    if( arr[mid] >= arr[0]){
        start = mid +1
    }
    else{
        end = mid
    }

    return findPivotIndex(arr,start, end)
}

console.log(
    findPivotIndex([7,9,1,2,3,4])
);

console.log(
    // findPivotIndex([1,2,3,4])
);