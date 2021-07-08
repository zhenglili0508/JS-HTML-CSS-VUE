// var canJump = function(nums) {
//     const totalLength = nums.length
//     const dp = Array(totalLength).fill(0)

//     dp[totalLength-1] = 1

//     function jump(position) {
//         if(dp[position]===1){
//             return true
//         }else if(dp[position===-1]){
//         return false
//         }

//         const maxJump = Math.min(position+nums[position],totalLength-1)
//         for(let i=position+1;i<=maxJump;i++){
//             const jumpResult = jump(i)
//             if(jumpResult === true){
//                 dp[position] =1
//                 return true
//             }
//         }
        
//         dp[position] = -1
//         return false 
//     }

//     let result = jump(0)
//     return result
// };


var canJump = function(nums) {
  if(nums.length==1)return false
  
  const dp = Array(nums.length-1).fill(false)
  console.log(dp)

  dp[0] = true

  for(let i=1 ;i<nums.length;++i){
      for(let j=i-1;j>=0;--j){
          if(!dp[j])continue
          if(nums[j]< i-j) continue
          dp[i]=true
          break
      }
  }
  return dp[nums.length-1]

};

// let nums = [2,3,1,1,4]
let nums = [3,2,1,0,4]
console.log(canJump(nums))