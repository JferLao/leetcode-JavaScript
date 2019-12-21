// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
// 
// 重复出现的子串要计算它们出现的次数。
// 
// 
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    // 计算前一个字符连续出现的次数
    let pre = 0
    // 计算后一个字符连续出现的次数
    let cur = 1
    // 每当 pre >= cur 时，既满足条件一次 count++
    let count = 0
    for(let i=1; i<s.length; i++) {
        if(s[i] === s[i-1]) {
            cur++
        } else {
        // 当出现不一样的字符时，现任变前任，现任重新计数
          pre = cur
          cur = 1
        }
        // 只要  pre >= cur, 即可满足条件一次
        if(pre >= cur) {
            count++
        }
    }
    return count

    


// 
// 执行用时 :60 ms, 在所有 javascript 提交中击败了100.00%的用户
// 内存消耗 :38.3 MB, 在所有 javascript 提交中击败了54.40%的用户
