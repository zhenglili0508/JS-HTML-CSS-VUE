var longestPalindrome = function(s) {
    var str = s
    if(str.length < 2){
        return str
    }
    let star = 0
    let maxlength = 1

    function HelperFunction(left,right) {
        while(left>=0 && right<str.length && str[left] === str[right]){
            if(right-left+1 > maxlength){
                maxlength = right-left+1
                star = left
            }
            left--
            right++
        }
    }

    for(let i=0;i<str.length;i++){
        HelperFunction(i-1,i+1)
        HelperFunction(i,i+1)
    }

    return str.substring(star,star+maxlength)
};

const str = 'ac'
var result = longestPalindrome(str)
console.log(result)