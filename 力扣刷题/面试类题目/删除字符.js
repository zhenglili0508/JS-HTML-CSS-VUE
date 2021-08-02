function deletStr(){
    const set = new Set()
    for(let i=0;i<s.length;i++){
        if(s[i]!=='b'){
            set.add(s[i])
        }
    }
    return [...set].join('')
}

let s = 'aabbdcce'
console.log(deletStr(s))