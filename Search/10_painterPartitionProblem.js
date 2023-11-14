// It is exactly similar Book Allocation problem
// Duplicte of the Previous Problem

//Search Space Algorithmks

// Find -- The minimum number of painters assigned to a student is minimum

// Given are N boards of with length of each given in the form of array, and K painters, such that each painter takes 1 unit of time to paint 1 unit of the board. The task is to find the minimum time to paint all boards under the constraints that any painter will only paint continuous sections of boards, say board {2, 3, 4} or only board {1} or nothing but not board {2, 4, 5}.

function isPossibleSolution(arr, m, mid){

    let totalPainters = 1;
    let totalBoard = 0

    for(let i =0; i<arr.length; i++){
        if(totalBoard + arr[i] <= mid){
            totalBoard += arr[i]
        }
        else{

            ++totalPainters;

            if(totalPainters > m || arr[i] > mid){
                return false;
            }
            totalBoard = arr[i]
        }
    }

    return true
}


function painterPartitionProblem(arr,m){
    
    let start = 0;
    let end = arr.reduce((acc, item)=> acc+= item, 0)

    let mid = Math.ceil(start + (end -start)/2)

    let ans = -1;

    while(start <= end){

        if(isPossibleSolution(arr,m,mid)){
            ans = mid
            end = mid -1
        }
        else{
            start = mid +1;
        }

        mid = Math.ceil(start + (end -start)/2)

    }

    return ans
}

console.log(painterPartitionProblem([5,5,5,5], 2));