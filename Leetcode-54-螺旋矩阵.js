// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    // 处理每一圈的数据遍历过程
    let map = (arr, r = []) => {
        for (let i = 0, len = arr.length; i < len; i++) {
            // 矩形上边的数直接复制
            if (i === 0) {
                r = r.concat(arr[i])
            } else if (i === len - 1) {
                // 矩形最下边的数倒转再复制
                r = r.concat(arr[i].reverse())
            } else {
                // 最右边的数移除并保存在结果中
                if (arr[i].length) {
                    r.push(arr[i].pop())
                }
            }
        }
        // 移除上边和下边
        arr.shift()
        arr.pop()
            // 从最下边往上移除数组第一个数实现最左边边界
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i].length) {
                r.push(arr[i].shift())
            }
        }
        // 一轮操作之后如果内圈还有数则继续递归
        if (arr.length) {
            return map(arr, r)
        } else {
            return r
        }
    }
    return map(matrix, [])
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了15.57%的用户
// 内存消耗 :33.5 MB, 在所有 JavaScript 提交中击败了98.56%的用户
