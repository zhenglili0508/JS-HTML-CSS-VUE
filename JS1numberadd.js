// 牛客网上的题目 
//计算给定数组 arr 中所有元素的总和

function sum(arr){
    let add=0;
    for(let i=0; i<arr.length; i++){
        add = add+arr[i];
    }
    return add;
}
//如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
function indexof(arr,item){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==item){
           return i
        }
    }
return -1
}

alert(
    function indexof(arr,item){
        for(let i=0;i<arr.length;i++){
            if(arr[i]==item){
               return i
            }
        }
    return -1
    }([1,2,3,4],8)
)


arr = [1,2,3,4]
// let out = sum(arr)
let out = indexof(arr,8)
console.log(out)