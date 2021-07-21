var findRepeatedDnaSequences = function(s) {
    const map = new Map()
    let result = []
    for(let i=0;i<=s.length-10;i++){
        console.log(i)
        let subDNA = s.substring(i,i+10)
        console.log(subDNA)
        if(map.has(subDNA)){
            map.set(subDNA,map.get(subDNA)+1)
        }else{
            map.set(subDNA,1)
        }
    }
    map.forEach(function(value,key){
        if(value>1){
            result.push(key)
        }
    });
    return result
};

var findRepeatedDnaSequences = function(s) {
    const map = new Map()
    let result = []
    for(let i=0;i<=s.length-10;i++){
        console.log(i)
        let subDNA = s.substring(i,i+10)
        console.log(subDNA)
        if(!map.has(subDNA)){
            map.set(subDNA,1)
        }else if(map.get(subDNA)===1){
            map.set(subDNA,2)
            result.push(subDNA)
        }else if(map.get(subDNA)>1){
            map.set(subDNA,map.get(subDNA)+1)
        }
    }
    return result
};

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// let s = "AAAGGTTT"
console.log(findRepeatedDnaSequences(s))