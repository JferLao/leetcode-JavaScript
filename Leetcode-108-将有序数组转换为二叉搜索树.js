// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 思路:递归 当节点不存在返回null,当节点只有一个时返回节点,节点大于2,每次将中间点作为根节点，将数组左右两边的部分分别递归调用，作为根节点的左右子树。
// 把二叉树从中间分开前面和后面部分,每次递归下去,那么节点左边就是数组的前一半,节点右边就是数组的右一半 
var sortedArrayToBST = function(nums) {
   if(nums.length === 0) {
    return null;
  }
  if(nums.length === 1) {
    return new TreeNode(nums[0]);
  }
    
  var mid = parseInt(nums.length / 2);
  var root=new TreeNode(nums[mid]);
  root.left=sortedArrayToBST (nums.slice(0,mid));
  root.right=sortedArrayToBST (nums.slice(mid+1));
  return root

}