var findNumber = function(zong,lianxu,nums) {
    shuchu  = zong - lianxu +1 
    var zilie = new Array(shuchu)
    
    for(var i =0 ; i<shuchu;i++){
        zzzzzz = nums.slice(i,i+lianxu)
        console.log("zzzzzz"+zzzzzz)
        let _nums = zzzzzz.sort((a, b) => a - b)
        console.log(_nums)
        let majority_element = nums[i]
        console.log("majority_element:"+majority_element)
        let count = 0
        for(var j=0;j<_nums.length;j++){

                console.log(i + "--------------------==="+j)
                if (_nums[j] != majority_element) {
                    count--
                    console.log(i + "---"+j+"count:"+count)
                  } else {
                    count++
                    console.log(i + "---"+j+"count:"+count)
                  }
                
                if (count == 0) {
                  majority_element = _nums[j]
                  console.log(i + ":"+j+"count:"+count)
                }          
        }
        var zl = (Number(-(Math.floor(lianxu/2)))+ Number(1))
        console.log("drfdsgdfgf:"+zl)
        if (count < zl) {
            majority_element = _nums[0]
            
            console.log(i + ":"+j+"count:"+count)
          }  
        zilie[i]=majority_element
        console.log("最后的结果："+zilie)
        // return majority_element
    }
}
zong = 6
lianxu = 3
nums = [1,2,2,4,1,3]
zhongshu = findNumber(zong,lianxu,nums)
