var majorityElement = function(nums) {
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    let map = new Map()
    let maxNum = Math.ceil(nums.length/2) , key = 0
    for(let i = 0 ; i<nums.length ; i++){
        key = nums[i]
        if(map.has(key)){
            map.set(key, map.get(key) + 1)
            if(map.get(key)>=maxNum){
                return key
            }
        }else{
            map.set(key,1)
        }
    }
    return -1
};

let nums = [1,2,5,9,5,9,5,5,5]
console.log(majorityElement(nums))