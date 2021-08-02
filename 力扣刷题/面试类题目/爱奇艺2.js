//  栈的思路
//var removeDuplicates = function(s) {
//     let stack = []
//    for(let i = 0; i < s.length; i++){
//        if(s[i] == stack[stack.length-1]){
//            stack.pop()
//        }else{
//            stack.push(s[i])
//        }
//    }
//    return stack.join('')
//  };


var removeDuplicates = function(s) {
   let p = 0
    while(p<s.length){
        if(s[p] === s[p+1]){
            console.log(p)
            s = s.slice(0,p)+s.slice(p+2)
            if(--p<0) p=0  // 非常重要
        }else{
            p++
        }
    }
    return s
}

 let  s = 'affggtteedfrrfdc'
 console.log(removeDuplicates(s))