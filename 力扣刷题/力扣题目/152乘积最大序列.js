var maxProduct = function(nums) {
    let Maxpro = []
    let Minpro = []
    Maxpro[0] = nums[0]
    Minpro[0] = nums[0]
    max = nums[0]
    for(let i=1;i<nums.length;i++){
        Maxpro[i] = Math.max(nums[i],nums[i]*Maxpro[i-1],nums[i]*Minpro[i-1])
        Minpro[i] = Math.min(nums[i],nums[i]*Maxpro[i-1],nums[i]*Minpro[i-1])
        max = Math.max(max,Maxpro[i])
    }
    return max
};
var nums = [2,3,-2,4]
console.log(maxProduct(nums))