function factorial(n){

    if(n===1) return 1
    const fact_num = factorial(n-1);

    return fact_num * n
}

console.log(
    factorial(5)
);