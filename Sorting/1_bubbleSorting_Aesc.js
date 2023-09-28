// Bubble Sorting ---> Swap is Done for every iteration
// Largest Element is pushed Back in the Array
// At every i th round the i th largest element is placed into it's correct position

// Time Complexity n^2

function bubbleSortingAesc(arr){

    for(let i=0; i< arr.length - 1; i++){
        for(let j=0; j< arr.length - 1 - i; j++){
            // Swap Ascending (8 > 2)
            if(arr[j] > arr[j+1]){ 
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


const sortedArr = bubbleSortingAesc([7,8,2,1,3])
console.log(sortedArr);
