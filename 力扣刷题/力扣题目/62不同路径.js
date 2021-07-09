var uniquePaths = function(m, n) {
    let memo = Array()

    for(let i=0;i<m;i++){
        memo.push([])
    }

    for(let row=0;row<m;row++){
        memo[row][0] = 1
    }
    for(let col=0;col<n;col++){
        memo[0][col] = 1
    }

    for(let row=1 ;row<m;row++){
        for(let col=1 ; col<n; col++){
            memo[row][col] = memo[row-1][col]+memo[row][col-1]
        }
    }
    return memo[m-1][n-1]
};

const m = 3, n = 7
console.log(uniquePaths(m,n))
