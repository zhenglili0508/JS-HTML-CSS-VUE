var singleNumber = function(nums) {
for(var i =0 ; i<nums.length;i++){
   // console.log('~~~~~'+nums[i])
    var b =0
    for(var j =0;j<nums.length;j++){
       // console.log('j'+ j +'is'+nums[j])
        if (nums[i]==nums[j]){
            b = b+1
            if (b == 2){
                break
            }
        }
    }
    if (b == 1 ){
        return nums[i]
    }
}
}
var a  = [2,2,1]
var result = singleNumber(a)
console.log(result)