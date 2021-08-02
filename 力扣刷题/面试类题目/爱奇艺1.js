function functionZZ(num) {

    var map  = new  Map()
    var set_index = new  Set()
    for(let i = 0 ;i<6;i++){
        if(map.has(num[i])){
            set_index.delete(map.get(nums[i]))
        }else{
            map.set(num[i],i)
            set_index.add(i)
        }
    }
    return set_index
}

let nums = [1,2,3,4,1,2]
// console.log(functionZZ(nums))

let arr = '1 2 3 4 1 2'
let arre = arr.split(' ')
// console.log(arre)


let set = new Set(['value1','value2','value3'])
let map = new Map([['key1','mapVal1'],['key2','mapVal2'],['key3','mapVal3']])
// map 与set 的循环遍历 
for(let value of set.values()){
    console.log(value)
}
for(let mapKeyValue of map){
 console.log(mapKeyValue)
}
for(let mapKey of map.keys()){
    console.log(mapKey)
}
for(let mapValue of map.values()){
    console.log(mapValue)
}
// map 与set 都有forEach
set.forEach((value,dupval)=>{
console.log(value,dupval)
})
map.forEach((key,value)=>{
    console.log(key,'--->',value)
})

// map 与set 都有.size属性！！
console.log('---------------size')
console.log(set.size)
console.log(map.size)

//转为数组
console.log([...set])



