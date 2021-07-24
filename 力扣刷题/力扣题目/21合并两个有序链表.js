var mergeTwoLists = function(l1, l2) {
  let curr = new ListNode()
  let dummy = curr

  while(l1!==null && l2!==null){//当两个链表都不为null时对比才有意义
      if(l1.val<l2.val){
          curr.next = l1
          l1 = l1.next
      }else{
          curr.next = l2
          l2 = l2.next
      }
      curr = curr.next
  }
  //那一个还没到null  那就直接接到最后
  if(l1!==null){ 
    curr.next = l1
  }
  if(l2!==null){
      curr.next = l2
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
            val:4,
            next:null,
        },
    },
}

let l2={
    val:1,
    next:{
        val:3,
        next:{
            val:4,
            next:null,
        },
    },
}

console.log(l1)
console.log(l2)
console.log("-----------------")
console.log(mergeTwoLists(l1,l2))