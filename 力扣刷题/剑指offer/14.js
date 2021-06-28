var cuttingRope = function(n) {
    if(n<2){
        return 0
    }
    if(n==2){
        return 1
    }
    if(n==3){
        return 2
    }
    var products  =  new  Array(0,1,2,3)
    for(var i=4;i<=n;i++){
        max = 0
        for(var j=1;j<=Math.ceil(i/2);j++){
            var a = i-j
            var product = products[j]*products[a]
            if(max<product){
                max = product
            }
            
        }
        products[i]=max
    }
    max = products[n]
    return max
};
var n = 8
console.log(cuttingRope(n)) 

// var cuttingRope = function(n) {
//    var arr = [0,0,1,2,4]
//    if(n<4){
//        return arr[n]
//    }
//    var max = 1000000007,res=1
//    while(n>4){
//        res = res%max*3
//        n-=3

//    }
//    return res*n%max
// };
// var n = 8
// console.log(cuttingRope(n)) 