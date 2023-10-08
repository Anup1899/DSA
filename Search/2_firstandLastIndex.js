// If the array is sortred and we need to find the first and last index of an element then use Binary Search    

// Method 1...........

// Looping
// Left Side
// function firstOccurrence(arr,  num){
//     let start = 0
//     let end = arr.length -1 
//     let midIndex = Math.floor(start + (end - start)/2);
//     let firstIndex = -1;
//     while(start <= end){
//         if(num < arr[midIndex]){
//             end  = midIndex -1
//         }
//         else if(num > arr[midIndex]){
//             start = midIndex + 1
//         }
//         else{
//             firstIndex = midIndex;
//             end = midIndex -1;
//         }

//         midIndex = Math.floor(start + (end - start)/2)

//     }

//     return firstIndex;
// }

// Right Side
// function lastOccurrence(arr,num){
//     let start = 0
//     let end = arr.length -1 
//     let midIndex =  Math.floor(start + (end - start)/2);
//     let lastIndex = -1;

//     while(start <= end){
//         if(num < arr[midIndex]){
//             end  = midIndex -1
//         }
//         else if(num > arr[midIndex]){
//             start = midIndex + 1
//         }   
//         else{
//             lastIndex = midIndex;
//             start = midIndex +1;
//         }

//         midIndex = Math.floor(start + (end - start)/2)
        
//     }

//     return lastIndex;
// }


// function firstAndLastIndex(arr, num){
   
//     console.log("Start Looping");
//     const first = firstOccurrence(arr, num)
//     const last = lastOccurrence(arr,  num)
//     console.log("FirstIndex=", first, " LastIndex=", last);
//     console.log("End Looping");


// }

// firstAndLastIndex([1,2,3,3,3,3,4,5],3)\


// Method 2........ Recursion

function firstIndexRecLeft(arr, num, start =0, end= arr.length - 1, firstIndex = -1){

    if(start > end){
        return firstIndex;
    }

    const midIndex = Math.floor(start + (end - start)/2)

    if(num < arr[midIndex]){
        // Left Side
        return firstIndexRecLeft(arr, num ,start, midIndex - 1, firstIndex)
    }
    else if(num > arr[midIndex]){
        // Right Side
        return firstIndexRecLeft(arr, num , midIndex +1, end, firstIndex)
    }
    else{
        firstIndex = midIndex;
        return firstIndexRecLeft(arr, num ,start, midIndex - 1, firstIndex)
    }
}


function lastIndexRecRight(arr, num, start=0, end = arr.length -1, lastIndex = -1){

    // Search in the Right Side
    if(start> end){
        return lastIndex;
    }

    let midIndex =  Math.floor( start + (end-start)/2);

    if(num < arr[midIndex]){
        // Left Side
       return lastIndexRecRight(arr, num, start, midIndex -1, lastIndex)
    }
    else if(num > arr[midIndex]){
        // Right Side
        return lastIndexRecRight(arr, num, midIndex+1, end, lastIndex)
    }
    else{
        // Update Right Side
        lastIndex = midIndex;
        return lastIndexRecRight(arr, num, midIndex+1, end, lastIndex)
    }
}

function firstadnLastIndexRecur(arr, num){

    const firstIndex = firstIndexRecLeft(arr, num)
    const lastIndex = lastIndexRecRight(arr, num)
    
    console.log(firstIndex, lastIndex);
}

firstadnLastIndexRecur([1,2,3,3,3,3,3,4,5],3)