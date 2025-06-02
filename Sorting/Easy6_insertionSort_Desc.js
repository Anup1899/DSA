function InsertionSortDesc(arr){
    for(let i=1; i< arr.length; i++){
        const currentElement = arr[i];
        let j = i-1;
        while(j>=0 && currentElement > arr[j]){
            arr[j+1] = arr[j]
            --j;
        }

        arr[j+1] = currentElement;
    }

    return arr;
}

const sortedArr = InsertionSortDesc([3,1,2,5,8])
console.log(sortedArr);