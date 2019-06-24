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