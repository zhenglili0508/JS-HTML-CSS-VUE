var countBattleships = function(board) {
    let result = 0

    function swing(row,col) {
        if(row<0||col<0||row>=board.length||col>=board[0].length||board[row][col] ===0){
            return
        }
        board[row][col] = 0
        swing(row+1,col)
        swing(row-1,col)
        swing(row,col+1)
        swing(row,col+1)
    }

    for(let row =0 ;row<board.length ; row++){
        for(let col =0 ;col<board[0].length ; col++){
            if(board[row][col] === 1){
                result +=1
                swing(row,col)
            }
        }
    }
    return result
};

let board = [[1,0,0,1],
             [0,0,0,1],
             [0,0,0,1]]

console.log(countBattleships(board))


