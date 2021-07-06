var threeSum = function(nums) {
     nums.sort(function (a,b) {
        return a-b // 升序排序 
    })
    var arr = []
    
    for(let i=0;i<nums.length-2;i++){
        if(i===0 || nums[i]!==nums[i-1]){
            let start= i+1;end= nums.length-1

            while(start< end){
                if(nums[i]+nums[start]+nums[end] === 0){   //去重 
                    arr.push([nums[i],nums[start],nums[end]])
                    start++
                    end--
                    while(start<end && nums[start] === nums[start-1]){  //去重
                        start++
                    }
                    while(start<end && nums[end] === nums[end+1]){
                        end--
                    }
                }else if(nums[i]+nums[start]+nums[end]>0){
                    end--
                }else if(nums[i]+nums[start]+nums[end]<0){
                    start++
                }
            }  
        }else{
            continue
        }
    }
    return arr
};



let nums = [-1,0,1,2,-4,-3,0,4]

let num2 = nums.sort()
console.log(nums) //[-1, -3, -4, 0, 0,  1,  2, 4]

let num1 = nums.sort(function (a,b) {
    return a-b
})
console.log(nums) //[-4, -3, -1, 0, 0,  1,  2, 4]
console.log(num2,num1) //[ -4, -3, -1, 0,0,  1,  2, 4]

// let result = threeSum(nums)
// console.log(result)