var swapPairs = function(head) {
    let curr = new ListNode()
    curr.next = head
    let dummy = curr
    
    while(curr.next!==null &&curr.next.next!==null){
        let n1 = curr.next
        let n2 = curr.next.next
    
        curr.next = n2
        n1.next = n2.next
        n2.next = n1
    
        curr = n1 // 指针往后挪到下一次的交换地
    }
    return dummy.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
 }
let l1={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:null,
            },
        },
    },
}

console.log(l1)
console.log("---------------------")
console.log(swapPairs(l1))