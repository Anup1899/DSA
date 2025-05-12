// Constraints
    // You can move towards right and down
    
// function FindPath(n, m, x=0, y=0){

//     if(x=== n || y===m){
//         return 0;
//     }

//     if(x=== n-1 && y=== m-1){
//         return 1;
//     }

//     // Move Downwards
//     const downPaths =  FindPath(n, m, x, y+1)
    
//     // Move Right
//     const rightPaths = FindPath(n, m, x+1, y)

//     return downPaths + rightPaths;
// }


// console.log(
//     FindPath(3,3)
// );

function FindPath( n, m, row=0, col=0){

    if(row === n || col === m){
        return 0;
    }

    if(row === n-1 && col === m-1){
        return 1;
    }
        const downPaths = FindPath(n,m,row+1, col);
        const rightPaths = FindPath(n,m,row, col+1);

        console.log(downPaths, rightPaths);

        return downPaths + rightPaths;
}

console.log(
    FindPath(3,4)
);