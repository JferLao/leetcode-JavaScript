// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

/**
			 * @param {number} n
			 * @return {number[][]}
			 */
			var generateMatrix = function(n) {
				// 用来记录结果的矩形数组
				let resultMatrix = []
				// 记录要走步数的结果集数组
				let steps = []
				// 记录各个方向要走的准确步数,开始从[0,-1]为起点向[0,n]走n步(第一步是[0,0])
				let step = n
				// 除了第一次往右走是只有一次的长度不变的n步,其余走的步数都为2次每次减小1的步数.
				for (let i = 0; i < n; i++) {
					if (step == n) {
						steps.push(step)
					} else {
						steps.push(step)
						steps.push(step)
					}
					step--
				}
				// 得到类似3的矩形向右走3步,向下向左走2步,向上和向右走1步,得到(3,2,2,1,1)的结果
				// 为了得到最终矩形里面包裹的数组
				for (let i = 0; i < n; i++) {
					resultMatrix.push([])
				}
				let value = 0; // 当前添加的值
				let currentPosition = [0, -1] //当前位置
				// 统计方向,余数为0向右走,余数为1向下走,余数为2向左走,余数为3向上走
				for (let j = 0; j < steps.length; j++) {
					let position = 0; // 设置方向方向
					position = j % 4;
					let stepNum = steps[j] //获取每一个方向要走的步数
					for (let i = 0; i < stepNum; i++) {
						value++ //每次移动值加1
						if (position == 0) { //为0往右走
							currentPosition[1] = currentPosition[1] + 1
						} else if (position == 1) { //为1往下走
							currentPosition[0] = currentPosition[0] + 1
						} else if (position == 2) { //为2往左走
							currentPosition[1] = currentPosition[1] - 1
						} else if (position == 3) { //为3往上走
							currentPosition[0] = currentPosition[0] - 1
						}
						resultMatrix[currentPosition[0]][currentPosition[1]] = value
					}
				}
				return resultMatrix
			};
			// 执行用时 :56 ms, 在所有 JavaScript 提交中击败了95.87%的用户
			// 内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了14.86%的用户
