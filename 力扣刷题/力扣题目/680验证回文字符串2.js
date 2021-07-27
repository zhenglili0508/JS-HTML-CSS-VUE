var validPalindrome = function(s) {
    function huiWen (left,rigth){
        while(left<rigth){
            if(s[left]!==s[rigth]){
                return false
            }
            left++
            rigth--
        }
        return true
    }

    let left = 0,rigth = s.length-1
    while(left<rigth){
        if(s[left]!==s[rigth]){
            // 还需要给一次机会
            const result = huiWen(left+1,rigth)||huiWen(left,rigth-1)  
            return result
        }
        left++
        rigth--
    }
    return true
};
let s = "abca"
console.log(validPalindrome(s))