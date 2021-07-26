var minPairSum = function(nums) {
    let  result = 0
    nums.sort((a,b)=>a-b)
    const len_2 =Math.floor((nums.length)/2) 
    for(let i=0;i<len_2;i++){
        result = Math.max(nums[i]+nums[nums.length-i-1],result)
    }
    return result
};

let nums = [3,5,2,3]
console.log(minPairSum(nums))