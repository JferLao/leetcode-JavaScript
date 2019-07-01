// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 思路:二叉树的层次遍历通过队列来进行，先将root进队，进入循环。
// 判断队列是否为空，不为空将此时队列中的元素一个一个出队，同时将子女入队。
// 这样每次出队的元素都为一个层次中的

var levelOrder = function(root) {

  if(root === null || root.length === 0){
    return [];
  }
    //创建队列并把起始节点入队(第一层)
    let queue = [], result = []
    queue.push(root)
    while(queue.length !== 0) {
      //从上一层节点拓展到下一层
      let level = []  //保存当前层过结果
      let size = queue.length
      for(let i = 0; i < size; i++) {
        node = queue.shift()
        level.push(node.val)
        if(node.left) {
          queue.push(node.left)
        }
        if(node.right) {
          queue.push(node.right)
        }
      }
      result.push(level)
    }
    return result
};