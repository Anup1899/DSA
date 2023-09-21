function createCombination(str, arr, newCobArr=[]){

    if(arr.length === 0){
        console.log(newCobArr);
        return;
    }

    for(let i=0; i<arr.length; i++){
        let str1 = arr[i];
        if(!newCobArr.includes(str1)){
            newCobArr.push(str1)
            // console.log(newCobArr);
        }
        const remainingArr = [...arr.slice(0,i), ...arr.slice(i+1)] ;

        for(let j=0; j<remainingArr.length; j++){
            str1 += remainingArr[j]
            createCombination(str, remainingArr, newCobArr)
            if(!newCobArr.includes(str1)){
                newCobArr.push(str1)
                console.log(newCobArr);
            }
        }


    }

}



const arr1= ["eet","code","eets"]
const str1 = "leetscode"

createCombination(str1,arr1)




