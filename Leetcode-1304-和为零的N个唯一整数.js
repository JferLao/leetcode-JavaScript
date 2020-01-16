// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
var sumZero = function(n) {
	let result = []
	if (n % 2 == 1) {
		let len = (n - 1) / 2;
		console.log(len);
		for (let i = 1; i < len + 1; i++) {
			result.push(0 - 2 * i)
			result.push(0 + 2 * i)
		}
		result.push(0)
	} else {
		let len = n / 2;
		for (let i = 1; i < len + 1; i++) {
			result.push(0 - 2 * i)
			result.push(0 + 2 * i)
		}
	}
	return result
};
// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了13.38%的用户
// 内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户

var sumZero = function (n) {
    const res = [];
    let count = 0;
    if (n % 2 !== 0) {
        res.push(0);
        count++;
    }
    while (count < n) {
        count+=2;
        res.push(count);
        res.push(-1 * count);
    }
    return res;
};
// 执行用时 :52 ms, 在所有 JavaScript 提交中击败了100.00%的用户
// 内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
