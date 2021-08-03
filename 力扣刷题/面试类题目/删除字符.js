function deletStr(){
    const set = new Set()
    const arr = new Array()
    for(let i=0;i<s.length;i++){
        if(s[i]!=='b'){
            if(!set.has(s[i])){
                arr.push(s[i])
                if(s[i]==='a'||s[i]==='c'){
                    set.add(s[i])
                }
            }
        }
    }
    return arr.join('')
}

let s = 'aabbdcce'
console.log(deletStr(s))