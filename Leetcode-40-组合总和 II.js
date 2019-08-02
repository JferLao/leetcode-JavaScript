// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// 
// candidates 中的每个数字在每个组合中只能使用一次。
// 
// 说明：
// 
// 所有数字（包括目标数）都是正整数。
// 解集不能包含重复的组合。 
// 
// 

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 思路:整体和39的递归回溯思路差不多,但是第40题的candidates有重复元素,并且结果不能有重复元素,那么就要对这些元素进行"跳过"了
// 多了这一句if(i>start&&candidates[i]==candidates[i-1]) continue;   backStack(candidates, sub, i+1, res, path); i+1代表当前元素不能被重复使用 
//简单来说candidates[i]==candidates[i-1]代表数组重复时直接跳过这个数到数组下一个数开始下一次循环 
// i>start不能在第一层就跳过
var combinationSum2 = function(candidates, target) {
	var res = [],
		path = [];
	candidates.sort((a, b) => a - b);
	backStack(candidates, target, 0, res, path);
	return res;
};

function backStack(candidates, target, start, res, path) {
	if (target < 0) return;
	if (target == 0) {
		res.push(path.slice());
		return;
	}
	for (var i = start; i < candidates.length; i++) {
		if (candidates[i]>target) return;
		if(i>start&&candidates[i]==candidates[i-1]) continue;
		path.push(candidates[i]);
		console.log(i,candidates[i],sub,path);
		var sub = target - candidates[i];
		backStack(candidates, sub, i+1, res, path);
		path.pop();
	}
}
console.log(combinationSum2([1,2,2,2,5],5));
// 执行结果：通过
// 显示详情
// 执行用时 :96 ms, 在所有 JavaScript 提交中击败了97.61%的用户
// 内存消耗 :36.2 MB, 在所有 JavaScript 提交中击败了93.59%的用户


