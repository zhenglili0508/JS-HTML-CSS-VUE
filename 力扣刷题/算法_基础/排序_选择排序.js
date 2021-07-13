var changSort = function(nums) {
    let temp = 0
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[j]<nums[i]){
                temp = nums[j]
                nums [j] = nums[i]
                nums[i] = temp
            }
        }
    }
    return nums
};
let nums = [8,5,1,9,6,4]
console.log(changSort(nums))