// js中统计数组中元素出现的个数

function getNumCount(arr) {
    return arr.reduce((pre,cur)=>{
        console.log(pre,cur)
        if(cur in pre){
            pre[cur]++
        }else{
            pre[cur] = 1
        }
        return  pre
    },{})
}
// console.log(getNumCount([1,2,2,2,3,4,5,5])) 


function unique(arr) {
    return arr.reduce((pre,cur)=>{
        console.log(pre,cur)
        if(!pre.includes(cur)){
            pre.push(cur)
        }
        return  pre
    },[])
}
// console.log(unique([1,2,2,2,3,4,5,5])) 

var arr=[1,2,3,4];
if(arr.includes(3))
    console.log("存在");
else
    console.log("不存在");


var arr=[1,2,3,4];
var index=arr.indexOf(3); 
console.log(index); // 2  返回的是下标！！
var index1=arr.indexOf(7); 
console.log(index1); // -1


var arr=[1,2,3,4];
var result = arr.findIndex(item =>{
    return item > 3
});
console.log(result);


var arr=[1,2,3,4];
var result = arr.find(item =>{
    return item > 9
});
console.log(result); //undefined
