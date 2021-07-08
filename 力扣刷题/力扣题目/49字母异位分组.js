// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
var groupAnagrams = function(strs) {
    if(strs.length === 0){
        return []
    }
    let map = new  Map()
    for(const str of strs){
        var temple =Array(26).fill(0)
        for(let i=0;i<str.length;i++){
            let asci_i = str.charCodeAt(i) - 97
            temple[asci_i]++
          
        }

        const key = temple.join(".")

        if(map.has(key)){
            //map.get(key).push(str)
            map.set(key,[...map.get(key),str])
        }else{
            map.set(key,[str])
        }
    }

    const result = []
    for(const arr of map){
        result.push(arr[1])
    }

    return result
}; 

// let strs =["bdddddddddd","bbbbbbbbbbc"]

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let strs = ["eat", "tea"]
console.log(groupAnagrams(strs))


// var groupAnagrams = function (strs) {
//     if (strs.length === 0) {
//       return [];
//     }
//     const map = new Map();
  
//     for (const str of strs) {
//       const characters = Array(26).fill(0);
//       for (let i = 0; i < str.length; i++) {
//         const ascii = str.charCodeAt(i) - 97;
//         characters[ascii]++;
//       }
//       const key = characters.join('.');
//       if (map.has(key)) {
//         map.set(key, [...map.get(key), str]);
//       } else {
//         map.set(key, [str]);
//       }
//     }
  
//     const result = [];
//     for (const arr of map) {
//       result.push(arr[1]);
//     }
  
//     return result;
//   };

//   let strs =["bdddddddddd","bbbbbbbbbbc"]
// console.log(groupAnagrams(strs))
