var productExceptSelf = function(nums) {
    let result = Array(nums.length).fill(1)
    let pro = 1

    for(let i=0 ; i<nums.length;i++){
        result[i] = pro*result[i]
        pro = pro*nums[i]
    }

    pro = 1
    for(let i=nums.length-1 ; i>=0;i--){
        result[i] = pro*result[i]
        pro = pro*nums[i]
    }

    return result
};

let nums = [1,2,3,4]
console.log(productExceptSelf(nums))