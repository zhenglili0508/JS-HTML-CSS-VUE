// var reverseList = function(head) {
//   let prev = null
//   let curr = head
//   let next = head
//   while(curr !==null){
//       next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//       console.log(prev)
//   }  
// return prev
// };


var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = head
   while(curr!=null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
   }
   return prev
  };

var head = {
    val : 1,
    next:{
        val : 2,
        next:{
            val : 3,
            next:null,
        },
    },
}

console.log(head)
console.log(reverseList(head))