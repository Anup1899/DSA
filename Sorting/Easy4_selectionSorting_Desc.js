function selectionSortingDesc(arr){

    for(let i=0; i< arr.length -1; i++){
        let largestIndex = i;
        for(let j= i+1; j< arr.length; j++){

            if(arr[j] > arr[largestIndex]){
                largestIndex = j
            }
        }

        const temp = arr[largestIndex]
        arr[largestIndex] = arr[i]
        arr[i] = temp;
    }

    return arr
}

const sortingDesc = selectionSortingDesc([3,1,4,8,7])
console.log(sortingDesc);