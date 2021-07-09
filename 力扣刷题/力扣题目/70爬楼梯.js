var climbStairs = function(n) {
    let memo = Array(n+1)
    memo[0] = 1
    memo[1] = 1
    for(let i=2; i<n+1; i++){
        memo[i] = memo[i-1] + memo[i-2]
    }
    return memo[n]
};

let n = 2
console.log(climbStairs(n))