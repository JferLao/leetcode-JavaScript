// 给定一个二叉树，找出其最大深度。
// 
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 
// 说明: 叶子节点是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 思路:左子树更深还是右子树，通过不断地递归得到子树高度，然后左右子树比较返回更大的那一个。
// 例子:[3,9,20,null,numm,15,7] 
// height:3对应maxDepth(3)递归 返回左节点9和右节点20的深度最大值 节点9没有子节点所以节点深度为0,所以maxDepth(3)返回右节点20的深度
//maxDepth(20) 递归 返回左子节点15个右子节点7 ,左子节点15个右子节点7深度都为0
//所以最终返回的深度为=15和7节点的相对20深度 1 + 20节点相对3的深度 1 +3节点的深度1 = 3

var maxDepth = function(root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
