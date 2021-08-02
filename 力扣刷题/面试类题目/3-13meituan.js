var findNumber = function(zong,lianxu,nums) {
    shuchu  = zong - lianxu +1 
    var zilie = new Array(shuchu)

    for(var i =0 ; i<shuchu;i++){
        zzzzzz = nums.slice(i,i+3)
        
        let _nums = zzzzzz.sort((a, b) => a - b)
   
        let majority_element = nums[i]
       
        let count = 0
        for(var j=0;j<_nums.length;j++){

                if (_nums[j] != majority_element) {
                    count--
 
                  } else {
                   count++              
                  }           
                if (count == 0) {
                  majority_element = _nums[j]         
                }          
        }
        if (count < 0) {
            majority_element = _nums[0]
          }  
        zilie[i]=majority_element
    }
    return zilie
}
zong = 5
lianxu = 3
nums = [1,2,2,1,3]
var zhongshu = findNumber(zong,lianxu,nums)
console.log(zhongshu)

