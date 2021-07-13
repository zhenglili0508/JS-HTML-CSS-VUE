// function quickSort1(nums) {
//     if(nums.length<=1) return nums
    
//     let left = []
//     let right = []
//     let pivot = nums[0]
//     for(let i= 0 ;i<nums.length;i++){
//         if(nums[i]<=pivot){
//             left.push(nums[i])
//         }else{
//             right.push(nums[i])
//         }
//     }
//     return quickSort1(left).concat(quickSort1(right))
// }


// let nums = [8,5,1,9,6,4]
// result = quickSort1(nums)
// console.log(result)

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]

   console.log(pivotIndex,pivot)
   console.log(arr)

    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // 递归
    return quickSort(left).concat([pivot], quickSort(right))
  }


let nums = [8,5,1,9,6,4]
result = quickSort(nums)
console.log(result)