// 递归实现 数字的阶乘
// function factorial(num){
//     if(num <=1){
//         return 1
//     }else{
//         return num*factorial(num-1)
//     }
// }

// var num = 3
// result = factorial(num)
// console.log(result)

// 一句话  实现 1-n的加法
function Add_1_N(n){
    return n<=0 ? 0: n+Add_1_N(n-1)
}
var n=4
result = Add_1_N(n)
// console.log(result)

// 最原始版本实现斐波那契

function fibonacci(nn){
    if(nn <= 0){
        return 0
    }
    if(nn == 1){
        return 1
    }
    return fibonacci(nn-1)+fibonacci(nn-2)
}


// 高效 循环实现斐波那契算法
function fibonacci_for(nn){
    arr = [0,1]
    if(nn<2){
        return arr[nn]
    }
    var first = 1
    var two = 0
    var fib = 0 
    for(var i= 2 ;i<=nn;i++){
        fib = first+two

        two = first
        first = fib
    }
    return fib
}
var nn=3
// console.log(fibonacci(nn))
// 青蛙跳台阶 问题
function qingwatiao(num){
    if (num == 1){
        return 1
    }
    if( num == 2){
        return 2
    }
    return qingwatiao(num-1) + qingwatiao(num-2)
}
// var num = 4
// console.log(qingwatiao(num))

var climbStairs = function(n) {
    var add=0
    var temp1 = 0
    var temp2 = 1
   
    for(var i=0; i<=n ;i++){
        add = temp1+temp2
        temp1 = temp2
        temp2 = add 
        
    }
    return add
};
var num = 3
console.log(climbStairs(num))