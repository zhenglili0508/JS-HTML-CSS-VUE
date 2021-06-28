
var threeSum = function(nums) {
var good = []
var bad =[]
var zzz =1
var news = []

for (var i =0;i<nums.length;i++){
    if(nums[i]>0){
        good.push(nums[i])
    }if(nums[i]<0){
        bad.push(nums[i])
    }else{
        zzz=0
    }   
}
console.log(good)
if(zzz==0){
for (var i =0;i<good.length;i++){
    for(var j =0;j<bad.length;j++){
        if(good[i]+bad[j] == 0){
            news.push([good[i],zzz,bad[j]])
            console.log(news)
        }
    }
}

}

};


var threeSum2 = function(nums) {
    nums.sort()
    console.log(nums)
var newzzl = []
for(var i=0 ;i<nums.length;i++){
    for(var j=i+1 ;j<nums.length;j++){
        for(var m=j+1 ;m<nums.length;m++){
            if(nums[i]+nums[j]+nums[m]==0){
                if(newzzl.includes([nums[i],nums[j],nums[m]])){
                    continue
                }else{
                    newzzl.push([nums[i],nums[j],nums[m]])
                }
                console.log(newzzl)
            }
        }
    }
}

}

var nums = [-1,0,1,2,-1,-4]
// var zzl = threeSum2(nums)
var repeatSet = new Set()
repeatSet= [[1,2],[3,4]]
if(repeatSet.has([1,2])){
    console.log('ture')
}else{
    console.log(11)
} 