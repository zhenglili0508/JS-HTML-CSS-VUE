var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i]!=9){
            digits[i]++
            return digits
        }else{
            digits[i] = 0
        }
    }
    // const result  = [1,...digits]
    const result  = [1].concat(digits)
    return result
};
let digits = [9,9]
console.log(plusOne(digits))