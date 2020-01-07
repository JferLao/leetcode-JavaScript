// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
/**
 * @param {string} s
 * @return {string[]}
 */
 
 //递归法
 
var restoreIpAddresses = function(s) {
    let res = [] //创建一个数组保存结果集
        // 创建一个递归函数,参数为上一次的结果和剩余的结果
    let recursion = (cur, sub) => {
        // 过滤非法字符串
        if (sub.length > 12) {
            return
        }
        //当上一次的结果返回的数组长度为4且拼接起来的字符串等于原字符串则说明递归结束
        if (cur.length === 4 && cur.join('') === s) {
            res.push(cur.join('.')) //把字符串拼接起来推入结果集中
        } else {
            // 每次遍历的次数最多为3次,保证上一次结果剩余字符串的长度不大于3
            for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
                //保存剩余字符串的可能集
                tmp = sub.substr(0, i + 1)
                if (tmp < 256) {
                    //cur.concat([tmp * 1]为了去除0开头或者00开头的可能性
                    recursion(cur.concat([tmp * 1]), sub.substr(i + 1))
                }
            }
        }
    }
    recursion([], s)
    return res
};

// 执行用时 :68 ms, 在所有 JavaScript 提交中击败了81.58%的用户
// 内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了11.54%的用户
