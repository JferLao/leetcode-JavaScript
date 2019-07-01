// 给定一个二叉树，检查它是否是镜像对称的。
// 
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 思路:通过递归的方式,先判断是否存在节点,然后通过方法Symmetric判断左右两边是否对称,当深度只有2时两边都一样,
// 深度为3时判断左节点的左子节点和右节点的右子节点是否相等,左节点的右子节点和右节点的左子节点是否相等.通过这个原理递归下去
var isSymmetric = function(root) {
   if(root===null){
       return true;
   }
    function Symmetric(left,right){
        if(left==null&&right!=null){
            return false;
        }else if(left!=null&&right==null){
             return false;
        }else if(left==null&&right==null){
            return true;
        }else{
            if(left.val!=right.val){
                return false;
            }
        }
        return Symmetric(left.left,right.right)&&Symmetric(left.right,right.left)
    }
    
    return Symmetric(root.left,root.right)
};