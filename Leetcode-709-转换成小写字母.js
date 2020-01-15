// 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

/**
 * @param {string} str
 * @return {string}
 */
// 小写字母的字符编码比大写字母多32,所以直接加32即可
var toLowerCase = function(str) {
	let res = ''
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i)
		if (code >= 65 && code <= 90) {

			res += String.fromCharCode(code + 32)
		} else {
			res += str[i]
		}

	}
	return res
};

// 执行用时:56 ms, 在所有 JavaScript 提交中击败了90.28 %的用户
// 内存消耗:33.8 MB, 在所有 JavaScript 提交中击败了21.74 %的用户
