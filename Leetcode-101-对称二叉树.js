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


// 构造树和实现判断对称二叉树的方法
//class Node{
	constructor(val) {
	    this.val=val
		this.left=this.right=undefined
	}
	static isSymmetric(root){
		if(!root){
			return true
		}
		let walk=(left,right)=>{
			if(!left&&!right){
				return true
			}
			if((left&!right)||(!left&&right)||(left.val!==right.val)){
				return false
			}
			return walk(left.left,right.right)&&walk(left.right,right.left)
		}
		return walk(root.left,root.right)
	}
}

class Tree{
	constructor(data) {
	    // 临时存储所有节点方便寻找父子节点
		let nodeList=[]
		// 顶节点
		let root
		for(let i=0;i<data.length;i++){
			// 先实现把每个数据转化为节点,再寻找节点之间的关系
			let node=new Node(data[i])
			nodeList.push(node)
			if(i>0){
				// 计算当前节点属于哪一层,取整()
				let n=Math.floor(Math.sqrt(i+1))
				// 记录当前层的起始点
				let q=Math.pow(2,n)-1
				// 记录上一层的起始点
				let p=Math.pow(2,n-1)-1
				// 找到当前节点的父节点
				let parent=nodeList[p+Math.floor((i-q)/2)]
				// 将当前节点和上一层的父节点作关联
				if(parent.left){
					parent.right=node
				}else{
					parent.left=node
				}
			}
		}
		root=nodeList.shift()
		nodeList.length=0
		return root
	}
}
