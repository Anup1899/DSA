// DP:-- Those who forget the past are condemned to repeat it
// There are two approaches two solve question in Dynamic Programming
    // 1. Top Down Approach --> Recursion + Memoization
    // 2. Bottom Up Approach --> Tabulation
    // After above two approaches we perform space optimization



const memoize = new Map();
function fibonacci(n){
    if(n===0 || n== 1){
        return n
    }
    if(memoize.has(n)){
        return memoize.get(n)
    }

    const lastEleme = fibonacci(n-1)
    const secondlasEleme =  fibonacci(n-2)

    memoize.set(n, lastEleme + secondlasEleme)

    return lastEleme + secondlasEleme
    // return fibonacci(n) + fibonacci(n-1)
}

const getSum = fibonacci(10)
console.log(getSum);
