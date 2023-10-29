// Approach To Solve Qucik Sort Algorithm
// Pivot and Partition
//  Pivot can be
// Random, Median, 1st Element, Last Element (Recommended)
// Pivot is the central point around which the sorting will occur 
// Partition is the step where elements are placed around the pivot
    // Expection is to place the element to the left which are lesser than the pivot and place the element to the write which are greater than the pivot
    // This is how the pivot will automatically will be placed at the write position

// Time Complexity
// Worst Case : O(n^2)
// Worst Case occurs when pivot is always the smallest or the largest element -------- (IMPORTANT)
// Average Case: O(nlogn)

// Coding
// Two Variables ---> High and Low
// Low = i - 1
// High is the last index of an array
// Creating space for the elements which are lesser than pivot

// function sortArray(arr, low, high) {ghf
//   if (high > low) {
//     const pivotIndex = partition(arr, low, high);

//     // Lower Values
//     sortArray(arr, low, pivotIndex - 1);
//     // Higher Values
//     sortArray(arr, pivotIndex + 1, high);
//   }
// }

// function partition(arr, low, high) {
//   const pivot = arr[high];

//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       ++i;
//     }
//   }

//   ++i;
//   const temp = arr[i];
//   arr[i] = pivot;
//   arr[high] = temp;

//   return i;
// }

// function quickSortAesc(arr, low = 0, high = arr.length - 1) {
//   if (high === 0) {
//     return arr;
//   }

//   sortArray(arr, low, high);

//   console.log(arr);
// }


function sortedArr(arr, low, high){

  if(high > low){
    const pivotIndex = partition(arr, low, high)
    
    // Left 

    sortedArr(arr,low, pivotIndex -1)
    console.log(pivotIndex);
    console.log("left",arr);
    
    // Right 
    sortedArr(arr, pivotIndex+1, high)
    console.log("right",arr);
  }
}


function partition(arr, low, high){
  const pivot = arr[high]

  let i= low - 1;
  for(let j = low; j< high; j++){
    if(arr[j] < pivot){
      ++i
      const temp = arr[j];
      arr[j] = arr[i]
      arr[i]  = temp;
    }
  }

  ++i;
  const temp1 = arr[i]
  arr[i] = pivot
  arr[high] = temp1;

  return i;
}

function quickSortAesc(arr, low =0, high = arr.length -1){
  
  if(high === 0){
    return arr
  }

  sortedArr(arr, low, high)

  console.log(arr);
}

quickSortAesc([6,3,9,5,2,8])