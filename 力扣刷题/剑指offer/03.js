// var findRepeatNumber = function(nums) {
//    for(var i =0 ; i<nums.length; i++){
//        temp = 0
//        console.log("zuichu："+nums[i])
//        if(nums[i]!= i){ 
//            temp = nums[i]
//            if(nums[i] == nums[temp]){  
//             return nums[i]
//            }else{
//             nums[i] = nums[temp]
//             nums[temp] = temp
//             i -= 1
//            }
//        }
//    }
// };

var findRepeatNumber = function(nums) {
    var s = new Set()
    for(var i in nums){
        var curLenth=s.size;
        s.add(nums[i]);
        console.log("i:"+i+"curLenth:"+curLenth+"gg"+s.size)
        if(s.size==curLenth){
            
            return nums[i];
        }
        
    }
}

var nums = [2,3,1,0,2,5,3]
zzz = findRepeatNumber(nums)
console.log(zzz)

