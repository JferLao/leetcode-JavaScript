// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 正则表达式模式匹配
    let reg = /^(\w+)\1+$/
    return reg.test(s)
};
// 执行结果：通过
// 显示详情执行用时 :100 ms, 在所有 javascript 提交中击败了47.01%的用户
// 内存消耗 :36.6 MB, 在所有 javascript 提交中击败了33.10%的用户


// 终极简单的方法把字符串重复两次之后去掉前后各一个字符,如果仍能从合并后字符串找到原字符串即代表重复
var repeatedSubstringPattern = function(s) {
    let res = (s + s).slice(1, -1)
    return res.indexOf(s) != -1
};
// 执行结果： 通过
// 显示详情
// 执行用时 :72 ms, 在所有 javascript 提交中击败了88.62%的用户
// 内存消耗 :36.8 MB, 在所有 javascript 提交中击败了33.10%的用户
