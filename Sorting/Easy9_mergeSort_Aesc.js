// Works on the principle of Divide and Conquer Algorithm

// function conquer(arr, start, mid, end){

//     const mergeSortedArray = new Array(end - start + 1)
//     let idx1 = start;
//     let idx2 =  mid+1;
//     let mergeIdx = 0

//     while(idx1 <= mid && idx2 <= end){
//         if(arr[idx1] <= arr[idx2]){
//             mergeSortedArray[mergeIdx] = arr[idx1]
//             ++mergeIdx;
//             ++idx1;
//         }
//         else{
//             mergeSortedArray[mergeIdx] = arr[idx2]
//             ++mergeIdx;
//             ++idx2; 
//         }
//     }

//     while(idx1 <= mid){
//         mergeSortedArray[mergeIdx] = arr[idx1]
//             ++mergeIdx;
//             ++idx1;
//     }

//     while(idx2 <= end){
//         mergeSortedArray[mergeIdx] = arr[idx2]
//         ++mergeIdx;
//         ++idx2;
//     }

//     for(let i=0, j= start; i< mergeSortedArray.length; i++, j++){
//         arr[j] = mergeSortedArray[i]
//     }
    
// }

// function divide(arr, start, end){

//     if(start >= end){
//         return;
//     }

//     const mid = Math.floor(start + (end - start)/2)
//     // Divide the Array
//         // Left Side Array
//         divide(arr, start, mid)
//         // Right Side Array
//         divide(arr, mid+1, end)

//     // Conquer
//     conquer(arr, start, mid, end)
// }

// function mergeSort(arr, start=0, end= arr.length -1){

//     if(arr.length <=1){
//         return arr;
//     }

//     divide(arr, start, end)

//     console.log(arr);
// }

function conquer(arr, start, mid, end){

    if(start < end){
    const mergeSortedArray = new Array(end - start +1)
    let mergeIdx = 0;

    let i = start;
    let j = mid + 1

    while( i <= mid &&  j <= end){
        if(arr[i] < arr[j]){
            mergeSortedArray[mergeIdx] =  arr[i]
            ++i
            ++mergeIdx
        }
        else{
            mergeSortedArray[mergeIdx] = arr[j]
            ++j
            ++mergeIdx
        }
    }

    while(i <= mid){
        mergeSortedArray[mergeIdx] =  arr[i]
        ++i
        ++mergeIdx
    }

    while(j <= end){
        mergeSortedArray[mergeIdx] = arr[j]
        ++j
        ++mergeIdx
    }


    for(let x = start, y = 0; y< mergeSortedArray.length; y++, x++){
        arr[x] = mergeSortedArray[y]
    }

}
}

function divide(arr, start, end){

    if(start< end){

        if(arr.length === 1) return
        
        const mid = Math.floor(start + (end- start)/2)
        
        // Left 
        divide(arr, start, mid)
        // Right 
        divide(arr,  mid+1, end)
        
        
        // conquer
        conquer(arr, start, mid, end)
    }
}

function mergeSort(arr, start =0, end = arr.length -1){

    if(arr.length ==1){
        return arr;
    }

    divide(arr, start, end)

    console.log(arr);
}

mergeSort([6,3,9,5,2,8])