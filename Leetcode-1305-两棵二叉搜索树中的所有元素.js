// 给你 root1 和 root2 这两棵二叉搜索树。

// 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
	let arr=[]
    const pushTree=(root)=>{
        if(!root) return;
        arr.push(root.val)
        if(root.left){
            pushTree(root.left)
        }
        if(root.right){
            pushTree(root.right)
        }
    }
    pushTree(root1)
    pushTree(root2)
    return arr.sort((a,b)=>a-b)   
};

// 执行用时 :320 ms, 在所有 JavaScript 提交中击败了的用户
// 内存消耗 :54.9 MB,100.00%的用户

var getAllElements = function(root1, root2) {
    let arr1=flat(root1)
    let arr2=flat(root2)
    let res=merge(arr1,arr2)
    return res
	// 排序后再合并排序得到数组
   function merge(l,r){
    let ret=[]
    let posL=0;
    let posR=0;
    while(posL<l.length&&posR<r.length){
        if(l[posL]<r[posR]){
            ret.push(l[posL++])
        }else{
            ret.push(r[posR++])
        }
    }
    while(posL<l.length){
        ret.push(l[posL++])
    }
    while(posR<r.length){
        ret.push(r[posR++])
    }
    return ret   
   } 
   // 进行中序排序
   function flat(root, arr = []) {
        if (!root) return arr
        flat(root.left, arr)
        arr.push(root.val)
        flat(root.right, arr)
        return arr
    }
}

// 执行用时 :276 ms, 在所有 JavaScript 提交中击败了89.61%的用户
// 内存消耗 :53.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
