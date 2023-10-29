function findElementInMountainArray(arr, num, start=0, end= arr.length -1){
    const pivotIndex = findPivotIndex(arr, start,end);

    if(num >= arr[0]){
        return binarySearchIndex(arr, num, start, pivotIndex -1 )
    }
    else{
        return binarySearchIndex(arr, num, pivotIndex,end)
    }
}

function findPivotIndex(arr, start,end){

    if(start >= end){
        return start;
    }

    const mid = Math.ceil(start + (end - start)/2)

    if(arr[mid] >= arr[0]){
        start = mid +1
    }
    else{
        end = mid
    }

    return findPivotIndex(arr, start, end)
}

function binarySearchIndex(arr,num, start,end){

    if(start > end){
        return -1;
    }

    const midIn  = Math.ceil(start + (end-start)/2)

    const mid = arr[midIn]

    if(num > mid){
        // Search on Right Side
       return binarySearchIndex(arr, midIn +1, end)
    }
    else if(num < mid){
        // Serch on Left Side
        return binarySearchIndex(arr, start, midIn -1)
    }
    else{
        return midIn
    }
}


console.log(findElementInMountainArray([7,9,1,2,3,4,5,6], 4));