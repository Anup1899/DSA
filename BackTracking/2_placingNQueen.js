// Time Complexity ---> n square

function isSafe(board, row, col){

    // Horizontal
    for(let i = 0; i< board.length; i++){
        if(board[row][i] === "Q"){
            return false;
        }
    }
    
    // Vertical
    for(let j = 0; j< board.length; j++){
        if(board[j][col] === "Q"){
            return false;
        }
    }

    // Top Right
    for(let r1= row, c1=col; r1>=0 && c1 < board.length  ; --r1, c1++){
        if(board[r1][c1] === "Q"){
            return false;
        }
    }
    
    // Top Left
    for(let r2= row, c2= col; r2>=0 && c2 >=0 ; --r2, --c2){
        if(board[r2][c2] === "Q"){
            return false
        }
    }
    
    // Bottom Right
    for(let r3 = row, c3 = col; r3 < board.length && c3 <board.length ; ++r3, c3++){
        if(board[r3][c3] === "Q"){
            return false
        }
    }


    // Bottom Left
    for(let r4 = row, c4= col; r4 < board.length && c4 >=0; ++r4, c4--){
        if(board[r4][c4] === "Q"){
            return false
        } 
    }



    return true;
}

function createBoard(n){
    return new Array(n).fill().map(item=>{
        return new Array(n).fill(0)
    })
}

function placeQueen(n, board= createBoard(n), col=0){

    if(col === board.length){
        const combination =[]
        for(let i=0; i< board.length; i++){
            let str=""
            for(let j=0; j<board.length; j++){

                if(board[i][j] === "Q"){
                    str += "Q"
                }
                else{
                    str += "."
                }
            }
            combination.push(str);
        }

        console.log(combination);
        return;
    }
    
    for(let i=0; i< board.length; i++){

        if(isSafe(board, i, col)){

            board[i][col] = "Q";
            placeQueen(n, board, col+1);
            // Queen is Removed while backtracking
            board[i][col] = 0
        }
    }
}

placeQueen(4)