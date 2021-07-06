
// function lengthOfLongestSubstring(str) {
//     var set = new Set()
//     var i=0,j=0,maxlength=0
//     if(str.length === 0){
//         return 0
//     }
//     for(i;i<str.length;i++){
//         if(!set.has(str[i])){
//             set.add(str[i])
//             maxlength = Math.max(maxlength,set.size)
//         }else{
//             while(set.has(str[i])){
//                 set.delete(str[j])
//                 j++
//             }
//             set.add(str[i])
//         }
//     }
//     return maxlength
// }

// const str = 'sdgfhfgdrre'
// var result =lengthOfLongestSubstring(str)
// console.log(result)


function lengthOfLongestSubstring(str) {
   let set  = new Set()
   let i = 0 ;j=0;maxlength=0
   if(str.length == 0){
       return 0
   }

   for(i;i<str.length;i++){
       if(!set.has(str[i])){
            set.add(str[i])
            maxlength = Math.max(maxlength,set.size)
       }else{
            while(set.has(str[i])){
                set.delete(str[j])
                j++
            }
            set.add(str[i])

       }
   }
   return maxlength
   
}

const str = 'aabvfdee'
var result =lengthOfLongestSubstring(str)
console.log(result)