// [
//   [1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 0, 0, 1],
//   [0, 1, 0, 1, 1]
// ]


// Below is incorrect solution------------------------------

const getVal = (arr, row, column, Length, Height)=>{

     if(row < 0 || row >= Length || column < 0 || column >= Height){
        return 0;
    }

    return arr[row][column]
}

function FindMaximumConnectedCell(cells, hasVisiteCell, size, row, column, Length, Height){
    
    if(row >= Length || column >= Height){
        return;
    }
    // console.log(row, column);
    
    hasVisiteCell[row][column]  = true;
    ++size;
    if(size > maximumConnectedCells){
        
        maximumConnectedCells = size;
    }

    let direction = [ [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1], [-1,0], [-1,1] ]
    // let direction = [ [-1,0], [-1,-1], [0,-1], [1,-1], [1,0], [1,1], [0,1], [-1,1] ]

    for(let i=0; i< direction.length; i++){
            const newR = direction[i][0];
            const newC = direction[i][1];
            const value = getVal(cells, newR, newC, Length, Height)
            if(value == 1 && hasVisiteCell[newR][newC] == false){
                    FindMaximumConnectedCell(cells, hasVisiteCell, size, newR, newC, Length, Height);
            }
    }

    hasVisiteCell[row][column]  = false;

}


const cells = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 1]
]




const Length = 5;
const Height = 5;


    
    const hasVisiteCell = new Array(Length).fill().map(item=> new Array().fill(false))
    
    
    
let maximumConnectedCells = 0;
let size = 0;

for(let i =0; i< Length; i++){
    for(let j =0; j<Height; j++){
        if(cells[i][j] === 1){
            size = 0;
            FindMaximumConnectedCell(cells, hasVisiteCell, size, i, j, Length, Height);
        }
    }
}

console.log(maximumConnectedCells);

