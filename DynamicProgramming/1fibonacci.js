// DP:-- Those who forget the past are condemned to repeat it
// There are two approaches two solve question in Dynamic Programming
    // 1. Top Down Approach --> Recursion + Memoization
    // 2. Bottom Up Approach --> Tabulation
    // After above two approaches we perform space optimization



// Approach 1:-- Memoization + Recurstion

function fibonacci_Memo(n, memoize = new Map() ){
    if(n <=1){
        return n;
    }

    if(memoize.has(n)){
        return memoize.get(n)
    }

    const lastEle = fibonacci_Memo(n-1, memoize)
    const secondLastEle = fibonacci_Memo(n-2, memoize)

    memoize.set(n, lastEle + secondLastEle);

    return lastEle + secondLastEle;
}


//Approach 2: Tabulation

function fibonacci_Tab(n){
    if(n<=1){
        return n
    }

    const fibo_sequence  = [0,1]

    for(let i=2; i<=n; i++){
        let fibo_sum = fibo_sequence[i-1] + fibo_sequence[i-2]

        fibo_sequence[i] = fibo_sum 
        
    }

    return fibo_sequence[n]
}

let x = 7
console.log(
    fibonacci_Memo(x)
);
console.log(fibonacci_Tab(x));
