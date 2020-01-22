// 给你一个仅由数字 6 和 9 组成的正整数 num。
// 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
// 请返回你可以得到的最大数字
			var maximum69Number = function(num) {
				const str = String(num).split('')
				let pos = 0
				while (pos < str.length) {
					if (str[pos] == 9) {
						pos++
					}
					if (str[pos] == 6) {
						str[pos] = 9
						return Number(str.join(''))
					}
				}
				return num
			};
// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了80.23%的用户
// 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
