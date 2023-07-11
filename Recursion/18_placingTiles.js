// 1 *m

function PlacingTiles(n,m){

    if(n===m ) return 2;

    if(n<m) return 1;
    
    // Vertical Placement
    const totalVerticle = PlacingTiles(n-m, m)

    // Horizontal Placement
    const totalHorizontal = PlacingTiles(n-1,m)

    return totalHorizontal + totalVerticle;
}


console.log(
    PlacingTiles(5,2)
);
 