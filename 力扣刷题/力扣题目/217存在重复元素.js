
var containsDuplicate = function(nums) {
    let set = new Set()//也可以用map  但是set更省时
    for(let i=0 ; i<nums.length ; i++){
        if(set.has(nums[i])){
            return true
        }else{
            set.add(nums[i])
        }
    }
    return false
};

let nums = [1,2,3,1]
console.log(containsDuplicate(nums))