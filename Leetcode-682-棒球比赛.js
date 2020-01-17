// 你现在是棒球比赛记录员。
// 给定一个字符串列表，每个字符串可以是以下四种类型之一：
// 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
// 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
// 你需要返回你在所有回合中得分的总和。

/**
 * @param {string[]} ops
 * @return {number}
 */
// 直接使用栈
var calPoints = function(ops) {
	let stack = []
	let pre1 // 保存上一次结果
	let pre2 // 保存上上一次结果
	ops.forEach(item => {
		// 遍历然后按情况分析
		switch (item) {
			case 'C':
				if (stack.length) {
					stack.pop()
				}
				break
			case 'D':
				if (stack.length) {
					pre1 = stack.pop()
					stack.push(pre1, pre1 * 2)
				}
				break
			case '+':
				pre1 = stack.pop()
				pre2 = stack.pop()
				stack.push(pre2, pre1, pre1 + pre2)
				break
			default:
				stack.push(item * 1)
		}
	})
	let res = 0
	// 最后相加
	return stack.reduce((total, num) => {
		return total + num
	})
};

// 执行用时 :56 ms, 在所有 JavaScript 提交中击败了97.73%的用户
// 内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了6.48%的用户
