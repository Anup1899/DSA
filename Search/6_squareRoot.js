// The square root of n will lie between 0 to n
// The space where we will search the number is called Search Space

function findSquareRoot(num,ans= -1, start =0,end=num){

    if(start >= end){
        return ans;
    }

    const mid =  Math.ceil(start + (end - start)/2)

    const square = mid * mid;
    if(square > num){
       return findSquareRoot(num, ans, start, mid-1)
    }
    else if(square < num){
        ans = mid
        return findSquareRoot(num, ans, mid, end)
    }
    else{
        return mid
    }

}

console.log(
    findSquareRoot(410)
);