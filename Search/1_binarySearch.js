// Binary Search is Applied on Monotonic function
    //IMPORTANT:-- Arrays which are sorted in Increasing Order or Descreasing Order
    // Time Complexity is logn


// Recursion

function binarySearch(arr, num, start=0, end=arr.length -1){

    if(start > end){
        return -1;
    }
    
    const middleIndex = Math.floor(start + (end - start)/2)
    // console.log("middle Index", middleIndex);
    
    const middleElement = arr[middleIndex]
    // console.log("middle Element", middleElement);
    
    if(num < middleElement){
        return binarySearch(arr, num, start, middleIndex)
    }
    else if(num > middleElement){
        return binarySearch(arr, num, middleIndex+1, end)
    }
    else{
        return middleIndex
    }

}


console.log("By Recursion");
const index = binarySearch([1,2,3,4,5,6], 9)
console.log(index);


function binarySearchloop(arr, num){
   
    let start = arr[0];
    let end = arr.length - 1;
    let mid = start + (end - start)/2

    while(start <=end){
        const midElem = arr[mid]

        if(num < midElem){
            end = mid -1
        }
        else if(num > midElem){
            start = mid+1
        }
        else{
            return midElem
        }

        mid = start + (end-start)/2

    }
    
}

console.log("By Looping");
const indexReq = binarySearch([7,8,9,10,11,12,13], 17)
console.log(indexReq);