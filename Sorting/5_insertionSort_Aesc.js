// Works on the Principle of LeftSide is a Sorted Array and RightSide is an Unsorted Array
// Traversing on LeftSide Element till the Current Element is smaller than each element in an Array
// Time Complexity = n^2  

function InsertionSortAesc(arr){

    for(let i=1; i< arr.length; i++){
        const currentElement = arr[i];
        let j = i-1;
        while(j>=0 && currentElement < arr[j]){
            arr[j+1] = arr[j]
            --j;
        }
        arr[j+1] =  currentElement
    }

    return arr;
} 

const sortedArr = InsertionSortAesc([7,8,3,4,1])
console.log(sortedArr);