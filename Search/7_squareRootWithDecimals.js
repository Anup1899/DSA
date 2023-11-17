function integerSquareRoot(num, ans =-1, start=0, end = num){

    if(start >=end){
        return ans
    }

    const mid = Math.ceil(start + (end-start)/2)
    const square = mid * mid;
    if(square > num){
        // Left Side
        return integerSquareRoot(num, ans, start, mid -1)
    }
    else if(square < num){
        // Right Side
        ans = mid
        return integerSquareRoot(num, ans, mid, end)
    }
    else{
        // Ans = mid
        return mid
    }


}

function find_SquareRooot_2Decimal(num){

    const nearestSquareRoot = integerSquareRoot(num)

    if(nearestSquareRoot * nearestSquareRoot === num){
        return nearestSquareRoot
    }

    let unitPlace_Decimal_SqaureRoot, tenthPlace_Decimal_SquareRoot

    for(let i=0.1; i<=0.9; i+=0.1){
        unitPlace_Decimal_SqaureRoot = nearestSquareRoot + i
        const squareDecimal = unitPlace_Decimal_SqaureRoot  *  unitPlace_Decimal_SqaureRoot 
        if(Number(squareDecimal.toFixed(2)) >= num ){
            break
        }
    }
    
    for(let j=0.01; j<=0.09; j+=0.01){
        tenthPlace_Decimal_SquareRoot = unitPlace_Decimal_SqaureRoot + j;
        const squareDecimal_10th = tenthPlace_Decimal_SquareRoot * tenthPlace_Decimal_SquareRoot
        if(Number(squareDecimal_10th.toFixed(2)) >= num ){
            break
        }
    }

    return tenthPlace_Decimal_SquareRoot.toFixed(2)


}

console.log(
    find_SquareRooot_2Decimal(25)
);