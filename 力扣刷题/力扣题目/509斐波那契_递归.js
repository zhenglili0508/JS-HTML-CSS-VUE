// var fib = function(n) {
//     if(n<=1){
//         return n
//     }

//     const cache = []
//     cache[0] = 0
//     cache[1] = 1
//     for(let i=2;i<=n ;i++){
//         cache[i] = cache[i-2]+cache[i-1]
//     }
//     return cache[n]
//  }


 var fib = function(n) {
   function fibFN(first,second,n){
        if(n===0){
            return first
        }else{
            return fibFN(second,first+second,n-1)
        }
   }
   return fibFN(0,1,n)
 }
let n =4
console.log(fib(n))
