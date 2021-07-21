// var rob = function(nums) {
//     const len = nums.length;
//     if(len == 0)
//         return 0;
//     const dp = new Array(len + 1);
//     dp[0] = 0;
//     dp[1] = nums[0];
//     for(let i = 2; i <= len; i++) {
//         dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
//         console.log("dp[i-1]"+dp[i-1]+"   dp[i-2] + nums[i-1]"+(dp[i-2] + nums[i-1])+'   '+dp)
//     }
//     return dp[len];
// };
// var nums = [2,1,1,2]
// console.log(rob(nums))


var rob = function(nums) {
    if(nums.length===1) return nums[0]
    if(nums.length===2) return  Math.max(nums[1],nums[0])
    let dp = new Array(nums.length-1)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1],nums[0])
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])
    }
    return dp[nums.length-1]
};

let nums = [2,7,9,3,1]
console.log(rob(nums))





























