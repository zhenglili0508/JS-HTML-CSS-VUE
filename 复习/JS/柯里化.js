function AddSum(x){
    const nums = [...arguments]
    function AddPro(){
        nums.push(...arguments)
        return AddPro
    }
    AddPro.sumof = ()=>{  //终止条件！！
        return nums.reduce((a,b)=>a+b)
    }
    return AddPro
}

let result = AddSum(1,1)(2,1)(3,1).sumof()
console.log(result)
