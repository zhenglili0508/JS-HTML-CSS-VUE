// // 实列化一个二叉树
// var tree = {
//     val : 3,
//     left: 9,
//     right:{
//         val:20,
//         left:15,
//         right:7,
//     }
// }
// // console.log(tree)

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
// var td = new TreeNode(3)
// td.left = 9
// td.right = new TreeNode(20)
// td.right.left = 15
// td.right.right = 7
// // console.log(td)

var buildTree = function(preorder, inorder) {
    if(!preorder.length||!inorder.length){
        console.log(111)
        return null
    }
    var newtree = new TreeNode(preorder[0])
    console.log(newtree)
    let i= 0
    for(;i<inorder.length; i++){
        if(inorder[i]==preorder[0]){
            break
        }
    }
    console.log(i)
    newtree.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i)) 
    newtree.right = buildTree(preorder.slice(i+1),inorder.slice(i+1)) 
    return newtree
};
var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]

var result = buildTree(preorder,inorder)
console.log(result)



