// var rob = function(nums) {
    
//     if(nums.length===1) return nums[0]
//     if(nums.length===2) return  Math.max(nums[1],nums[0])
//     let dp = new Array(nums.length-1)
//     dp[0] = nums[0]
//     dp[1] = Math.max(nums[1],nums[0])

//     for(let i=2;i<nums.length-1;i++){
//         dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])
//     }
//     console.log(dp)

//     let dp1 = new Array(nums.length-1)
//     dp1[0] = nums[0]
//     dp1[1] = nums[1]
//     dp1[2] = Math.max(dp1[1],nums[2])

//     for(let i=3;i<nums.length;i++){
//         dp1[i] = Math.max(nums[i]+dp1[i-2],dp1[i-1])

//     }
//     console.log(dp1)

//     dp[nums.length-1] = Math.max(dp1[nums.length-1],dp[nums.length-2])
//     return dp[nums.length-1]
// };


var rob = function(nums) {
    let len = nums.length
    if(nums.length===1) return nums[0]
    if(nums.length===2) return  Math.max(nums[1],nums[0])

    function subRob(nums,star,end) {
        let dp = new Array(len)
        console.log(star,end)

        dp[star] = nums[star]
        dp[star+1] = Math.max(dp[star],nums[star+1])
        console.log(dp)
        for(let i=star+2;i<=end;i++){
            dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
        }
        console.log(dp)
        return dp[end]
    } 

    return Math.max(subRob(nums,0,len-2),subRob(nums,1,len-1))
}

let  nums = [1,2,3,1]
console.log(rob(nums))