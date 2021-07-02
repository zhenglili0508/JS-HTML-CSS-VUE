var twoSum = function(nums, target) {
    var map = new Map()
    for(var i=0 ;i<nums.length;i++){
        var complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement),i] 
        }else{
            map.set(nums[i],i)
        }
    }
};

var nums = [1,3,4,2]
var target = 5
console.log(twoSum(nums,target))

//思路  用map把所需数据都保存下来  第二次遍历的时候 用map的方法 


// 备注  在 js中的 array.forEach   的用处 

// var arr = [1,2,3,4]
// function addAll(arr) {
//     var result = 0 
//     arr.forEach(element => {
//         result += element
//     });
//     return result
// }
// console.log(addAll(arr))
