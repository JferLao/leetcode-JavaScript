// 给你两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // 把arr1数组分割成两个数组,一个是包含arr2里面元素的a1,一个是除了a1之外的a2
	// 先遍历分割数组
	let a1=[]
	let a2=[]
	arr1.map(item=>{
		// 获取a1里面元素在arr2的索引值,-1代表不在arr2
		let index=arr2.indexOf(item)
		if(index==-1){
			a2.push(item)
		}else{
			a1.push({index:index,val:item})
		}
	})
	// 排序
	a2.sort((a,b)=>a-b)
	a1.sort((a,b)=>a.index-b.index)
	const a=a1.map(a=>a.val)
	// 合并数组
	return [...a,...a2]
};

// 执行结果：通过
// 显示详情执行用时 :80 ms, 在所有 JavaScript 提交中击败了28.31%的用户
// 内存消耗 :34.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
