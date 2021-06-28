
function main(nums ,target){
    var zzzl = new Array(2)
    for(let i=0;i<nums.length;i++){
        
    }
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            
            console.log(i,j)
            // zzzl.push(i+1,j+1)
            zzzl[0]=i+1
            zzzl[1] = j+1
            return zzzl
        }
    }
}

nums = [2,3,4,5,6]
zzz=main(nums )
console.log(zzz)



