// Definition for a binary tree node.
// function TreeNode(val, left, right) {
// this.val = (val===undefined ? 0 : val)
//    this.left = (left===undefined ? null : left)
//    this.right = (right===undefined ? null : right)
// }
/**
* @param {TreeNode} root
* @return {number}
*/
var maxDepth = function(root) {
console.log(root);
if(root == null) {
    return 0;
} else {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}

};

root1={
val:3,
    left:{
    val:9
    },
    right:{
        val:20,
        left:{
            val:15,
        },
        right:{
            val:7,
        },
    }
}
let deep_num = maxDepth(root1)
console.log(deep_num)
