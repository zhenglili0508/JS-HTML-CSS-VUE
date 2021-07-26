// var addTwoNumbers = function(l1, l2) {
//     let stack1 = [],stack2=[]
//     while(l1!==null){
//         stack1.push(l1.val)
//         l1 =l1.next
//     }
//     while(l2!==null){
//         stack2.push(l2.val)
//         l2 =l2.next
//     }

//     console.log(stack1,stack2)
//     let carry = 0,curr = null
//     while(stack1.length!==0||stack2.length!==0){
//         let sum = 0
//         if(stack1.length!==0){
//             sum += stack1.pop()
//         }
//         if(stack2.length!==0){
//             sum += stack2.pop()
//         }

//         sum+= carry
//         const node = new ListNode(sum%10)
//         carry = Math.floor(sum/10)

//         node.next = curr
//         curr = node
//     }
//     if(carry === 1){
//         const node =new ListNode(1)
//         node.next = curr
//         curr = node
//     }
// return curr
// };

var addTwoNumbers = function(l1, l2) {
    let num1 = 0,num2 = 0
    while(l1!==null){
        num1 = num1*10 +l1.val
        l1=l1.next
    }

    while(l2!==null){
        num2 = num2*10 +l2.val
        l2=l2.next
    }
    num = num1+num2
    console.log(num1,num2,num)

    let curr = null
    if(num === 0 ){
        const node = new ListNode(num) 
        node.next = curr
        curr = node
        return curr
    }
    while(num>0){
        const node = new ListNode(num%10) 
        node.next = curr
        curr = node
        num = Math.floor( num/10)
    }
    return curr
}


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

let l1 = {
    val:0,
    next:null,
}
let l2 = {
    val:0,
    next:null,
}
// let l2 = {
//     val:5,
//     next:{
//         val:6,
//         next:{
//             val:4,
//             next:null,
//         },
//     },
// }

console.log(l1)
console.log(l2)
console.log(addTwoNumbers(l1,l2))


const arr1 = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
const arr2 = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

const num1 = arr1.map(Number)
const num2 = arr2.map(Number)
let num1_n=0,num2_n=0
for(let i = 0 ; i<num1.length;i++){
    num1_n = num1_n*10 +num1[i]
}

for(let i = 0 ; i<num2.length;i++){
    num2_n = num2_n*10 +num2[i]
}

console.log(num1,num1_n,num2,num2_n,num2_n+num1_n)

