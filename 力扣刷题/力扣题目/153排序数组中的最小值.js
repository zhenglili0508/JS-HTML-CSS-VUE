var findMin = function(nums) {
    if(nums.length ===1){
        return nums[0]
    }
    let left = 0,right= nums.length-1
    if(nums[right]>nums[0]){
        return nums[0]
    }
    let mid = 0
    while(left<right){
        console.log(left,right)
        mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[mid+1]){
            return nums[mid+1]
        }
        if(nums[mid-1]>nums[mid]){
            return nums[mid]
        }
        if(nums[mid]>nums[left]){
            left = mid
        }else{
            right = mid
        }
    }
};

var nums = [2,3,4,5,1]
console.log(findMin(nums))