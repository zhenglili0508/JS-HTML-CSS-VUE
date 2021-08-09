var buildTree = function(preorder, inorder) {
    if(!preorder.length||!inorder.length){
        return null
    }
    var newtree = new TreeNode(preorder[0])
    let i= 0
    for(;i<inorder.length; i++){
        if(inorder[i]==preorder[0]){
            break
        }
    }
    newtree.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i)) 
    newtree.right = buildTree(preorder.slice(i+1),inorder.slice(i+1)) 
    return newtree
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(buildTree(preorder,inorder))
// let preorder = {
//     val:3,
//     left:{
//         val:9,
//         left:null,
//         right:null
//     },
//     right:{
//         val:20,
//         left:{
//             val:15,
//             left:null,
//             right:null
//         },
//         right:{
//             val:7,
//             left:null,
//             right:null
//         }
//     },
// }

