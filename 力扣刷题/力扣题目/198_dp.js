var rob = function(nums) {
    const len = nums.length;
    if(len == 0)
        return 0;
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
        console.log("dp[i-1]"+dp[i-1]+"   dp[i-2] + nums[i-1]"+(dp[i-2] + nums[i-1])+'   '+dp)
    }
    return dp[len];
};
var nums = [2,1,1,2]
console.log(rob(nums))