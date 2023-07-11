// Constraints
    // You can move towards right and down
    
function FindPath(n, m, x=0, y=0){

    if(x=== n || y===m){
        return 0;
    }

    if(x=== n-1 && y=== m-1){
        return 1;
    }

    // Move Downwards
    const downPaths =  FindPath(n, m, x, y+1)
    
    // Move Right
    const rightPaths = FindPath(n, m, x+1, y)

    return downPaths + rightPaths;
}


console.log(
    FindPath(3,3)
);