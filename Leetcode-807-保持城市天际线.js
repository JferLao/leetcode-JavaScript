// 在二维数组grid中，grid[i][j]代表位于某处的建筑物的高度。 我们被允许增加任何数量（不同建筑物的数量可能不同）的建筑物的高度。 高度 0 也被认为是建筑物。

// 最后，从新数组的所有四个方向（即顶部，底部，左侧和右侧）观看的“天际线”必须与原始数组的天际线相同。 城市的天际线是从远处观看时，由所有建筑物形成的矩形的外部轮廓。 请看下面的例子。

// 建筑物高度可以增加的最大总和是多少？

var maxIncreaseKeepingSkyline = function(grid) {
	let result = 0;
	// 记录一维数组里面最大值集合
	const rowMax = [];
	// 记录二位数组里面最大值集合
	const colMax = [];
	for (let i = 0; i < grid.length; i++) {
		let element = grid[i]
		for (let j = 0; j < element.length; j++) {
			let el = element[j]
			// 保存一维数组里面的最大值
			if (el > rowMax[i] || !rowMax[i]) rowMax[i] = el
			保存二维数组里面的最大值
			if (el > colMax[j] || !colMax[j]) colMax[j] = el
		}
	}
	for (let i = 0; i < grid.length; i++) {
		let element = grid[i]
		for (let j = 0; j < element.length; j++) {
			let el = element[j]
			// 在一维数组和二维数组最大值数组里面找到最小值然后减去当前数在合并相加
			result += Math.min(rowMax[i], colMax[j]) - el
		}
	}
	return result
};
// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了72.22%的用户
// 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了52.63%的用户
