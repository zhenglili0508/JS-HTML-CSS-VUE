var maxAreaOfIsland = function(grid) {
    function partIsland (row,col){
        if(row<0 || col<0 || row>=grid.length || col>=grid[0].length || grid[row][col]===0){
            return 0
        }
        grid[row][col] = 0 
        let count = 1
        count+=partIsland(row+1,col)
        count+=partIsland(row-1,col)
        count+=partIsland(row,col+1)
        count+=partIsland(row,col-1)

        return count
    }

    let result = 0
    for(let row=0 ; row<grid.length;row++){
        for(let col=0 ; col<grid[0].length;col++){
            if(grid[row][col]===1){
                let count1 = partIsland(row,col)
                console.log('=============',count1)
                result = Math.max(count1,result) 
            }
        }
    }
    return result
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))