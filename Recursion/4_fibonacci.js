// function fibonacci(n){
    
//     if(n <2) return n;
//     return fibonacci(n-1) + fibonacci(n-2)
    
// }

// console.log(fibonacci(6));


// function MYfibonacci(n, prev, curr, i){
//     if(i === n) return curr;

//     return MYfibonacci(n, curr, prev+curr, i+1);

// }

// console.log(MYfibonacci(8, 0, 1, 2));


function fibonacci(n, prev=0, curr=1, i=2){
    
    if(i===n) return curr+ prev;

    console.log("n", "prev", "curr", "i");
    console.log(n, curr, prev+ curr, i+1);

    return fibonacci(n, curr, prev+ curr, i+1)
}

console.log(
    fibonacci(6)
);