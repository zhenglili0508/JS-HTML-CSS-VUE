var search = function(nums, target) {
    
    let left = 0 ,right = nums.length -1
    let mid = 0
    while(left<=right){
        mid = Math.floor((right+left)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] < target){
            left = mid+1
        }else if(nums[mid] > target){
            right = mid-1
        }
    }
    return -1
};

let nums = [5], target = 5
console.log(search(nums,target))