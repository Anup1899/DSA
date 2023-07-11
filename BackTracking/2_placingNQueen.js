// Time Complexity ---> n square

function saveBoard(board, possibilitiesArr){

    const newPattern = []

    for(let row = 0; row < board.length; row++){
        let str =""; 
        for(let col=0; col < board[row].length; col++){4
            if(board[row][col] === "Q"){
                str += "Q"
            }
            else{
                str +="."
            }
        }

        newPattern.push(str)
    }

    possibilitiesArr.push(newPattern)
    console.log(possibilitiesArr);
    return 
}


function checkSafe(board, row, col){

    const r = row;
    const c = col;
    // Check Horizontal
    for(let j= 0; j< board.length; j++){
        if(board[row][j] === "Q"){
            return false;
        }
    }

    // Check Vertical
    for(let i= 0; i< board.length; i++){
        if(board[i][col] === "Q"){
            return false;
        }
    }

    // Check Upper Right
    for(let i =r, j=c; i >=0 && j< board.length; i--, j++){
        if(board[i][j] === "Q"){
            return false;
        }
    }
    // Check Upper Left
    for(let i =r, j=c; i >=0 && j>=0; i--, j--){
        if(board[i][j] === "Q"){
            return false;
        }
    }

    // Check Lower Right
    for(let i =r, j=c; i <board.length && j< board.length; i++, j++){
        if(board[i][j] === "Q"){
            return false;
        }
    }
 
    // Check Lower Left
    for(let i =r, j=c; i <board.length && j>=0; i++, j--){
        if(board[i][j] === "Q"){
            return false;
        }
    }

    return true

} 


function helper(board, possibilitiesArr, col){

    if(col === board.length){
        saveBoard(board, possibilitiesArr);
       
    }

    
    // Placing Queen in every column
    for(let row=0; row< board.length; row++){
        
        const isSafe = checkSafe(board, row, col);

        if(isSafe){
            board[row][col] = "Q";

            helper(board, possibilitiesArr, col+1);
            
            // If the placement is incorrect
            board[row][col] = "";

        }

    }

}

const placeQueen  = (n)=>{
    // const chessBoard = new Array(n).fill("-");
    // const row = new Array(n).fill("-");
    // chessBoard.fill(row);

    // let chessBoard = [];
    // const row = [];

    // for(let i=0; i< n; i++){
    //     row.push(0);
    //     // chessBoard.push(0)
    // }
    
    // for(let j=0; j< n; j++){
    //     chessBoard = [...chessBoard, row]
    // }
    

    // for(let i=0; i< chessBoard.length; i++){
    //     chessBoard.push(row);
    // }
    
    const chessBoard = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];
    const possibilitiesArr = [];
    
    helper(chessBoard,possibilitiesArr,0);
}

console.log(
    placeQueen(4)
);
