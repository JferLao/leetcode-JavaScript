// 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。

// 另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。

// 返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// 最直接的方法,遍历把结果推入队列后排序,不过耗时大
var allCellsDistOrder = function(R, C, r0, c0) {
	let res = []
	for (let i = 0; i < R; i++) {
		for (let j = 0; j < C; j++) {
			res.push({
				val: [i, j],
				index: Math.abs(i - r0) + Math.abs(j - c0),
			})
		}
	}
	res.sort((a, b) => a.index - b.index)
	return res.map(item => item.val)
};
// 执行用时 :300 ms, 在所有 JavaScript 提交中击败了5.95%的用户
// 内存消耗 :47.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户


// 同样遍历,不过把曼哈顿距离当作索引推入队列则不需要排序,最后把结果集推入一个新的数组返回即可
var allCellsDistOrder = function(R, C, r0, c0) {
	let res = []
	for (let i = 0; i < R; i++) {
		for (let j = 0; j < C; j++) {
			let index = Math.abs(i - r0) + Math.abs(j - c0)
			if (res[index] == undefined) {
				res[index] = [
					[i, j]
				]
			} else {
				res[index].push([i, j])
			}
		}
	}
	let resArr = []
	res.map((item) => {
		resArr.push(...item)
	})
	return resArr
};
// 执行用时 :160 ms, 在所有 JavaScript 提交中击败了98.81%的用户
// 内存消耗 :46 MB, 在所有 JavaScript 提交中击败了100.00%的用户
