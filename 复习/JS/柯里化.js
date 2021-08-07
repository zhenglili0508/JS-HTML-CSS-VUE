function AddSum(){

}

// let result = AddSum(1)(2)(3)


function  fun1(x){
    return x
}
function  fun2(x){
   x
}
function  fun3(x){
    return ({x})
}
console.log(fun1(1)) //1
console.log(fun2(1)) //undefined
console.log(fun3(1)) //{ x: 1 }