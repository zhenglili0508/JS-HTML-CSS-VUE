var largestNumber = function(nums) {
   nums.sort((a,b)=>{
    let sa = 10,sb = 10
    while(sa<=a){
        sa*=10
    }
    while(sb<=b){
        sb*=10
    }
    console.log(a,b,sa,sb)
    return  (b*sa+a)-(a*sb+b)

   })
   
   return nums.join('')
};
 console.log(largestNumber([3,30]))