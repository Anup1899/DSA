// Array of pages is given [10,20,30,40]
// IMPORTANT -- Arrray of pages may not be sorted
    //Arrray can be unsorted

// Find -- The minimum number of pages assigned to a student is minimum

// Step 1 -- To find the range (IMPORTANT Step to start question as binary number)
// The range of  page allocated to the student is from the minimum pages and sum of all the pages
//Search Space Algorithm

// Step 2 -- To find the move the start and end by finding isPossible solution 
// Find mid
// isPossible Solution 
    //If IsPossible Solution is True
        //Then -> Every Number greater than mid is the possible solution
        //So end = mid - 1
        //else IsPossible Solution is False
        //Then -> Every Number less than mid is not the possible solution
        //So --> start = mid +1 

//IMPORTANT -- Edge Case is While Finding the isPossible Solution
    //Check Where the count of Student is less than Give Number of Studen that is m
        // if true
            //Logic
        //else return false

function isPossibleSolution(arr,m, start,end, mid){
    let totalStudents = 1;

    let totalPages = 0;
    
    for(let i=0; i<arr.length; i++){
        if(totalPages + arr[i] <= mid){
            totalPages += arr[i]
        }
        else{
            ++totalStudents;    

            if(totalStudents > m || arr[i] > mid ){ //Checking Condition for the total students value to be less than given m value OR array element should be less than end
                return false
            }
                totalPages = arr[i]
        }
    }
    return true;
}

function bookAllocation(arr, m){

    let start = 0;
    let end = arr.reduce((acc, item)=> acc+=item, 0)

    let mid = Math.ceil(start + (end-start)/2)

    let ans = -1; 

    while(start <= end){
        if(isPossibleSolution(arr,m, start,end, mid)){ 
            ans = mid;
            end = mid -1 //Number Greater than mid are all the possible Solution
        }
        else{
            start = mid +1 //Number less than mid are not the possible Solution
        }
        
        mid = Math.ceil(start + (end-start)/2)
    
    }

    return ans;
}


console.log(
    bookAllocation([10,20,30,40],2)
);
