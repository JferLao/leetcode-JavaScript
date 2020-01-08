// 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
// 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
// 返回可以通过分割得到的平衡字符串的最大数量。

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balanceStr = 0;
    let sign = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            sign++
        }
        if (s[i] == "L") {
            sign--
        }
        if (sign == 0) {
            balanceStr++
        }
    }
    return balanceStr;
};

// 执行结果：通过
// 显示详情执行用时 :64 ms, 在所有 JavaScript 提交中击败了74.85%的用户
// 内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
