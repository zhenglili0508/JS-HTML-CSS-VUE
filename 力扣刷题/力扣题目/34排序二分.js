var searchRange = function(nums, target) {
    const findLeft =function (nums,target){
        let left = 0 ,right = nums.length -1
        let mid = 0
    
        while(left<=right){
            mid = Math.floor((right+left)/2)
            if(nums[mid] == target){
                right = mid-1
            }else if(nums[mid] < target){
                left = mid+1
            }else if(nums[mid] > target){
                right = mid-1
            }
        }
        return left
    }

    let result = new Array(2)
    if(findLeft(nums,target)>=nums.length || nums[findLeft(nums,target)]!=target) {
        return [-1,-1]
    }
    else{
        result=[findLeft(nums,target),findLeft(nums,target+1)-1]
    }

    return result
};

let nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums,target))






