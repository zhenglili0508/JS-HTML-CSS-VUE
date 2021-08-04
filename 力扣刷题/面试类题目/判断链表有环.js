function hasCycle( head ) {
    let n1 = head
    let n2 = head
    while(n1!==null&&n2!==null){
        n1 = n1.next
        if(n1==null){  // 避免已经走到倒数第一个了  null.next无效
           return false 
        }
        n1 = n1.next
        n2 = n2.next
        if(n1 === n2) return true
    }
    return false
}

const head = {
    val:3,
    next:{
        val:2,
        next:{
            val:0,
            next:{
                val:-4,
                next:2,
            },
        },
    },
}

console.log(head)
console.log(head.next.next.next.next)