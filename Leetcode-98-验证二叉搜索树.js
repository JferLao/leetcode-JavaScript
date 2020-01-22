// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
// 思路:还是通过递归,每个节点的左子节点的值要比节点小,并且节点的右子几点要节点大.,
// 因为isValidBST方法不提供val所以我们新创方法isValid接收节点和最大值最小值
// 通过递归到最小节点如果都返回真证明是二叉树,

var isValidBST = function(root) {
    return isvalid(root, Infinity, -Infinity);

    function isvalid(node, max, min) {
        if (node === null) {
            return true;
        }
        if (node.val >= max || node.val <= min) return false;
        return isvalid(node.left, node.val, min) && isvalid(node.right, max, node.val);
    }
};
// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了85.40%的用户
// 内存消耗 :37.3 MB, 在所有 JavaScript 提交中击败了50.97%的用户

//****************************************************************************************
class Node {
    constructor(val) {
        this.val = val
        this.left = this.right = undefined
    }
}
class Tree {
    constructor(data) {
        let root = new Node(data.shift())
            // 遍历所有的数据,逐渐插入到当前这棵树搜索树中去
        data.forEach(item => {
            this.insert(root, item)
        })
        return root
    }
    static isValidBST(root) {
            // 遍历到最下一层
            if (!root.left && !root.right) {
                return true
                    // 当左子树存在时值父节点的值比左子树节点小或者有子树存在时父节点的值比右子数节点大则返回false
            } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
                return false
            } else {
                return Tree.isValidBST(root.left) && Tree.isValidBST(root.right)
            }
        }
        // 插入二叉搜索树的方法
    insert(node, data) {
        if (node.val > data) {
            if (node.left === undefined) {
                node.left = new Node(data)
            } else {
                this.insert(node.left, data)
            }
        } else {
            if (node.right === undefined) {
                node.right = new Node(data)
            } else {
                this.insert(node.right, data)
            }
        }
    }
}
