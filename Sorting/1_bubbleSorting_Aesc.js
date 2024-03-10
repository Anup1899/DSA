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

/*
    Logic Building -- [7,8,2,1,3] 
    i=0 i<4

    (4 - i)

    i=0 
      j=0 j<(4-0)
      j=0 [7,8,2,1,3] 
      j=1 [7,2,8,1,3]
      j=2 [7,2,1,8,3]
      j=3 [7,2,1,3,8]

    i=1
      j=[0, 3)
      j=0 [2,7,1,3,8]
      j=1 [2,1,7,3,8]
      j=2 [2,1,3,7,8]
    
    i=2
      j=[0,2)
      j=0 [1,2,3,7,8]  
      j=1 [1,2,3,7,8] 
    
    i=3
      j=[0,1)
      j=0 [1,2,3,7,8]  
*/

