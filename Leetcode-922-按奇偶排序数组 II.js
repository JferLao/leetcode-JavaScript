// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    // 升序排序
    let ret = A.sort((a, b) => a - b)
        // 用来存储奇数偶数排序后的数组
    let res = []
    let odd = 1
    let even = 0
    ret.forEach((item) => {
        if (item % 2 == 1) {
            res[odd] = item
            odd = odd + 2
        } else {
            res[even] = item
            even = even + 2
        }
    })
    return res
};

// 执行用时 :136 ms, 在所有 javascript 提交中击败了22.22%的用户
// 内存消耗 :41.4 MB, 在所有 javascript 提交中击败了19.51%的用户
