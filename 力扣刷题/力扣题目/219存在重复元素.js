var containsNearbyDuplicate = function(nums, k) {

    let map = new Map()
    for(let i=0 ; i<nums.length ;i++){
        if(map.has(nums[i]) && i-map.get(nums[i])<=k){
            return true
        }
        map.set(nums[i],i)
    }
    return false
};
let nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums,k))