var findLengthOfLCIS = function(nums) {
var dp = new Array(nums.length)
dp[0] = 1
var result = 1
for(var i=1;i<nums.length;i++){
    if(nums[i]>nums[i-1]){
        dp[i]=dp[i-1]+1
        if(dp[i]>result){
            result = dp[i]
        }
    }else{
        dp[i] = 1
    }
    }
console.log(dp)

return result
};

var nums = [1,3,5,4,6]
console.log(findLengthOfLCIS(nums))