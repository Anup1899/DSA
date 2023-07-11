// Optimized calculatePower by stack height of log n
function calculatePowerOptimized(x, n){

    if(n === 0) return 1;

    if(x===0) return 0;
    
    if(n%2 === 0){
        const calPowerOnm1 = calculatePowerOptimized(x, n/2);
        return calPowerOnm1 * calPowerOnm1 
    }
    else{
        const calPowerOnm1Odd = calculatePowerOptimized(x, (n-1)/2);
        return calPowerOnm1Odd * calPowerOnm1Odd * x;
    }

}

console.log("Optimi");
console.log(
    calculatePowerOptimized(2,7)
);



// Stack Height of Pow
function calculatePower(x, n){

    if(n === 0) return 1;

    if(x===0) return 0;

    const powerOnm1 = calculatePower(x, n-1)

    return x * powerOnm1;

}

console.log("Long");
console.log(
    calculatePower(2,7)
);


