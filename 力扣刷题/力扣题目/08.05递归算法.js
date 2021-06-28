var multiply = function(A, B) {
    if(A ==0||B==0){
        return 0
    }
    if(A<B){
        return  B + multiply(A-1,B)
    }
    return  A + multiply(A,B-1)
    
};

// var multiply = function(A, B) {
//     if(A ==0){
//         return 0
//     }
//     else{
//         return  B + multiply(A-1,B)
//     }
// };

var A = 3
var B = 4
result = multiply(A, B)
console.log(result)