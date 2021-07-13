var wiggleSort = function(nums) {
    nums.sort((a,b)=>{
        return a-b
    })
    let len = nums.length-1
    let tmp = new Array(len)
    for(let i=1;i<nums.length;i+=2){
        tmp[i] = nums[len]
        len--
    }
    for(let j=0;j<nums.length;j+=2){
        tmp[j] = nums[len]
        len--
    }
    return tmp
};
let nums = [1,3,2,2,3,1]
console.log(wiggleSort(nums))


//传统办法  超时！！！
// var wiggleSort = function(nums) {
//     nums.sort((a,b)=>{
//         return a-b
//     })
//     console.log(nums)
//     let i = Math.ceil(nums.length/2)-1
//     i= i+1
//     console.log(i)
//     let arr = []
//     for(let j=0 ; j<Math.ceil(nums.length/2) ;j++){
//         arr.push(nums[j],nums[i])
//         i+=1
//     }
//     return arr
// };