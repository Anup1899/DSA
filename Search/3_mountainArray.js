function peakInMountainArra(arr, start = 0, end = arr.length- 1, peakValu){

    if(start >= end){
        return peakValu
    }

    const mid =  Math.ceil(start + (end-start)/2)
    
    if(arr[mid+1] > arr[mid]){
        start = mid +1
    }
    else{
        end = mid
    }

    peakValu = arr[start]
  return  peakInMountainArra(arr, start,end, peakValu)
}

console.log(
    peakInMountainArra([1,2,3,10,9,8,7])
);