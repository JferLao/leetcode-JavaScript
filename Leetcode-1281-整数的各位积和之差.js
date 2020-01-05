// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    while (n) {
        let ele = n % 10
        sum = sum + ele
        product = product * ele
        n = (n - ele) / 10
    }
    return product - sum
};



/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let add = 0;
    let plus = 1;
    let str = n.toString().split("")
    let res = str.map(item => {
        add += parseInt(item)
        plus *= parseInt(item)
        return plus - add
    })
    return res[res.length - 1]
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了27.64%的用户
// 内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
