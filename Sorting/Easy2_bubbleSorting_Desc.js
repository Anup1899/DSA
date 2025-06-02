function bubbleSortingDesc(arr){

    for(let i=0; i< arr.length -1; i++){
        for(let j=0; j< arr.length - 1 -i; j++){
            // Swap Desc (2 < 8)
            if(arr[j] < arr[j+1]){
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


const sortingDesc = bubbleSortingDesc([2,1,8,3,7])
console.log(sortingDesc);