// 1 *m

// function PlacingTiles(n,m){

//     if(n===m ) return 2;

//     if(n<m) return 1;
    
//     // Vertical Placement
//     const totalVerticle = PlacingTiles(n-m, m)

//     // Horizontal Placement
//     const totalHorizontal = PlacingTiles(n-1,m)

//     return totalHorizontal + totalVerticle;
// }


// console.log(
//     PlacingTiles(5,2)
// );
 

function PlacingTiles(n,m){

    if(n < m){
        return 1;
    }

    if(n===m){
        return 2;
    }
    // Vertical Placing
    const verticalPlacing =  PlacingTiles(n-m, m);
    // Horizontal Placing
    const horizontalPlacing =  PlacingTiles(n-1, m);

    return verticalPlacing + horizontalPlacing
}

console.log(
 PlacingTiles(4,2)
);