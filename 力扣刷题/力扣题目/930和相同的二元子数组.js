var numSubarraysWithSum = function(nums, goal) {
    let sum = 0
    let result = 0
    let preSum = []    
    for(let i = 0 ; i<nums.length+1 ;i++){
        preSum[i] = sum
        sum += nums[i]
        for(let j =0 ;j<i ;j++){
            if(preSum[i]-preSum[j] == goal){
                result +=1
            }
        }
    }
    return result
};

let nums = [0,0,0,0,0], goal = 0
console.log(numSubarraysWithSum(nums,goal))
/// 不会
