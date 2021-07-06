var isValid = function(s) {
    let mapping = new Map()
    mapping.set('(',')')
    mapping.set('{','}')
    mapping.set('[',']')

    const stack = []

    for(let i=0;i<s.length;i++){
        console.log(stack)
        if(mapping.has(s[i])){
            stack.push(mapping.get(s[i]))
        }else{
            if(s[i]!==stack.pop()){
                return false
            }
        }
    }
    
    if(stack.length != 0){
        return false
    }
    return true
}

let s = "(]"
console.log(isValid(s))

//stack  栈！