// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 递归方法Match
    let Match = (s, p) => {
            // 判断标志
            let tag = false
                // 如果p和s的长度都为0则直接返回true
            if (p.length == 0) {
                return !s.length;
            }
            // 判断p的长度大于0并且p和s的第一个字符相等或者p的第一个字符为.时皆属于匹配,这个时候设置判断标志
            if (s.length > 0 && (p[0] == s[0] || p[0] == ".")) {
                tag = true
            }
            // 存在*的情况下并且p的字符至少为2
            if (p.length > 1 && p[1] == "*") {
                // 分情况分析
                // *匹配0个元素时直接把p中的前面两位去掉然后进行递归
                // *匹配多个元素时直接把s的第一位去掉(如果*匹配多个会一直递归,直到变成*匹配0个元素时执行p去两位操作,递归到最后把*相关都去掉之后匹配不存在*的地方)
                return Match(s, p.slice(2)) || (tag && Match(s.slice(1), p))
            } else {
                // 不存在*直接通过递归每次移除第一个字符的情况下比较后面的内容
                return (tag && Match(s.slice(1), p.slice(1)))
            }
        }
        // 最后返回执行Match方法
    return Match(s, p)
}

// 执行用时 :144ms, 在所有 javascript 提交中击败了 25.74%的用户
// 内存消耗 :37.9MB, 在所有 javascript 提交中击败了 8.43%的用户
