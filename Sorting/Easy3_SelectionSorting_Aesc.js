// Selection Sorting --- The smallest element is pushed in the Front
// No Unnecessary Swapping is Done in Every Loop -- Swapping is Done Once\
// Time Complexity is n^2


function selectionSortingAesc(arr){

    for(let i=0; i < arr.length -1; i++){
        let smallest = i;
        for(let j = i+1; j< arr.length; j++){
            // 8 > 2
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }

        const temp = arr[i];
        arr[i] = arr[smallest]
        arr[smallest] = temp;
        console.log(arr);
    }

    return arr;
}

const sortedArr = selectionSortingAesc([8,4,7,3,2,1])
console.log(sortedArr);