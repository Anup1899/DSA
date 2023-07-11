function calculateSum(n, sum){

    const total = sum+n;
    if(n===0){
        // console.log(total);
        return total
    } 
   return  calculateSum(n-1, total)
}


const x =   calculateSum(5,0)
console.log(x);