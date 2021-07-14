function Add() {
    const nums = [...arguments];
    console.log(nums)
    return function() {
        nums.push(...arguments);
        return function() {
            nums.push(...arguments);
            return nums.reduce((a, b) => a + b);
        }
    }
}
function Add() {
    const nums = [...arguments]
    console.log(nums)
    function AddPro() {
        const nums = [...arguments]
        return AddPro
    }
    AddPro.sumOf = () => {
        return nums.reduce((a, b) => a + b);
    }
    return AddPro
}

function Add1() {
    const nums = [...arguments];
    function AddPro() {
        nums.push(...arguments);
        return AddPro;
    }
    AddPro.sumOf = () => {
        return nums.reduce((a, b) => a + b);
    }
        return AddPro;
   }
console.log(Add1(1,2)(2)(3).sumOf())

    
// 详解JS函数柯里化  高阶函数
// function add(a,b) {
//     return a+b
// }
// console.log(add(1,2))

// function curryingAdd(x) {
//     return function (y) {
//         return x+y
//     }
// }
// console.log(curryingAdd(1)(2))