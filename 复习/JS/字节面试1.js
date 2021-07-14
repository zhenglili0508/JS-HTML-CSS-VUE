var fun1 = x => x
var fun2 = x => {x}
var fun3 = x => ({x})

console.log(fun1(1)) // 1
console.log(fun2(1)) //undefined
console.log(fun3(1)) //{ x: 1 }

let fun4 = (x) => {
    x
    console.log(x)
}
console.log(fun4(1))

let fun = (x) => {
    return {x}
}
console.log(fun(1))

function zll() {
    
}
console.log(zll())

// function fun4(x){
//     let  x 
//     return x
// }
// console.log(fun4(1))

    