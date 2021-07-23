var deleteNode = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let n1 = dummy
    let n2 = dummy
    while(n1!==null){
        n2 = n1.next
        if(n2.val===val){
            n1.next=n2.next
            return dummy.next
        }
        n1=n2
    }
    return dummy.next
};

function ListNode(val) {
        this.val = val;
        this.next = null;
     }
let val = 5
let head={
    val:4,
    next:{
        val:5,
        next:{
            val:1,
            next:{
                val:9,
                next:null,
            },
        },
    },
}
console.log(head)
console.log('---------------------')
console.log(deleteNode(head,val))