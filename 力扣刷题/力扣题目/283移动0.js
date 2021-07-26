var moveZeroes = function(nums) {
    let j = 0
    for(let i=0 ;i<nums.length ;i++){
        if(nums[i]!==0){
            nums[j] = nums[i]
            j++
        }
    }
    for(j;j<nums.length;j++){
        nums[j] = 0
    }
    return nums
};

let nums = [1,0,0,3,12]
console.log(moveZeroes(nums))