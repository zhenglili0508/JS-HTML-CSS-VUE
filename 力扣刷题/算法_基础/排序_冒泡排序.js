function BubbleSort(nums) {
let temp = 0
  for(let i = 0; i<nums.length; i++){
    for(let j = 0; j<nums.length; j++){
        if(nums[j]>nums[j+1]){
            temp = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = temp
         }
    }
  }  
  return nums
} 
let nums = [2,4,3,5,1]
console.log(BubbleSort(nums))