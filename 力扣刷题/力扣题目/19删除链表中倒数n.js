var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let n1 = dummy
    let n2 = dummy
    
    for(let i=0;i<=n;i++){ //两个指针之间的距离是n 
        n2=n2.next
    }

    while(n2!==null){//当n2指向最后的时候   n1就指向了 前面的一个 
        n1 = n1.next
        n2 = n2.next
    }

    n1.next = n1.next.next
    return dummy.next
};
function ListNode(val) {
    this.val = val;
    this.next = null;
 }

let head = {
    val :1,
    next:{
        val :2,
        next:{
            val :3,
            next:{
                val :4,
                next:{
                    val :5,
                    next:null,
                },
            },
        },
    },
}

console.log(head)
let  n=2
console.log(removeNthFromEnd(head,n))