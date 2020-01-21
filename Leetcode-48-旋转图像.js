// 给定一个 n × n 的二维矩阵表示一个图像。
// 将图像顺时针旋转 90 度。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 思路一:现将数组倒置排序,再将每一列数组倒置
	var rotate = function (matrix) {
    let len = matrix.length;
    for (let i = 0; i < len ; i++) {

        for (let j = i; j < len ; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    for (let i = 0; i < matrix.length ; i++) {
        matrix[i].reverse();
    }
	};
	
/*****************************************分割线**********************************/

	
// 思路二:正方形对于当前位置，计算旋转后的新位置，然后再计算下一个新位置，第四个位置又变成当前位置了，然后循环下一个位置的四次循环;
var rotate = function(matrix) {
	var n=matrix.length;
	var temp;
    for(var i=0;i<n/2;i++){
		for(var j=i;j<n-1-i;j++){
			temp=matrix[i][j];
			matrix[i][j]=matrix[n-1-j][i];
			matrix[n-1-j][i]=matrix[n-1-i][n-1-j];
			matrix[n-1-i][n-1-j]=matrix[j][n-1-i];
			matrix[j][n-1-i]=temp;
		}
	}
};

/*****************************************分割线**********************************/

// 思路三
var rotate = function(arr) {
    // 获取n的维度
    let vecor = arr.length
        // 垂直翻转,以中心行翻转即可,翻转一半次数即可
    for (let i = 0, len = vecor / 2; i < len; i++) {
        // 对每列进行循环遍历
        for (let j = 0, tmp; j < vecor; j++) {
            // 保存当前元素
            tmp = arr[i][j]
                // 同一列进行依据中心行进行交换,且索引要减1
            arr[i][j] = arr[vecor - i - 1][j]
            arr[vecor - i - 1][j] = tmp
        }
    }
    // 对角线翻转
    for (let i = 0; i < vecor; i++) {
        for (let j = 0, tmp; j < i; j++) {
            tmp = arr[i][j]
                // 根据对角线交换只要对角标对换即可
            arr[i][j] = arr[j][i]
            arr[j][i] = tmp
        }
    }
    return arr
};
// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了86.80%的用户
// 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了71.69%的用户
