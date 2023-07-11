function fibonacci(n){
    
    if(n <2) return n;
    return fibonacci(n-1) + fibonacci(n-2)
    
}

console.log(fibonacci(6));




function MYfibonacci(n, prev, curr, i){
    if(i === n) return curr;

    return MYfibonacci(n, curr, prev+curr, i+1);

}

console.log(MYfibonacci(8, 0, 1, 2));