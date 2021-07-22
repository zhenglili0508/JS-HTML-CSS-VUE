var numIslands = function(grid) {
    let count = 0

    function dfs(row,col) {
        if(row<0 || col<0 || row>=grid.length || col>=grid[0].length || grid[row][col]==='0'){
            return
        }
        grid[row][col] = '0'
        dfs(row+1,col)
        dfs(row-1,col)
        dfs(row,col+1)
        dfs(row,col-1)
    }

    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if(grid[row][col]==='1'){
                count +=1
                console.log(row,col)
                dfs(row,col)
            }
        }
    }
    return count
};

let grid = [["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]]
 console.log(numIslands(grid))