// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

// 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。


/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let gray = (n) => {
        // 边界情况
        if (n == 0) {
            return ['0']
        } else if (n == 1) {
            return ['0', '1']
        } else {
            // 除了高位后的编码是上一个n的编码
            let prev = gray(n - 1)
                // 索引位置要减1
            let len = Math.pow(2, n) - 1
            let result = []
            for (let i = 0; i < prev.length; i++) {
            //模板字符串直接拼接
                result[i] = `0${prev[i]}`
                result[len - i] = `1${prev[i]}`
            }
            return result
        }
    };
    // 把二进制转回十进制
    let res = gray(n).map((item) => {
        return parseInt(item, 2)
    })
    return res
};
// 			执行结果：通过
// 显示详情执行用时 :68 ms, 在所有 javascript 提交中击败了63.00%的用户
// 内存消耗 :34 MB, 在所有 javascript 提交中击败了31.11%的用户
//
