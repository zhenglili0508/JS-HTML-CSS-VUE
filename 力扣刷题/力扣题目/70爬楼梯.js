// var climbStairs = function(n) {
//     let memo = Array(n+1)
//     memo[0] = 1
//     memo[1] = 1
//     for(let i=2; i<n+1; i++){
//         memo[i] = memo[i-1] + memo[i-2]
//     }
//     return memo[n]
// };


var climbStairs = function(n) {
  let dp = Array(n+1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for(let i=3;i<n+1;i++){
      dp[i] = dp[i-1]+dp[i-2]
  }
  return dp[n]
 };


let n = 3
console.log(climbStairs(n))