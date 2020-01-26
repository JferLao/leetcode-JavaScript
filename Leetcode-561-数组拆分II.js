//给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 /n 的 min(ai, bi) 总和最大。

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
//先排序得到最大的数
    nums.sort((a, b) => a-b)
    let res = nums[0]
    //然后从第二位开始取奇数位的数的相加的和
    for(let i = 2, l = nums.length; i <l; i++) {
        if(i % 2 === 0) {
            res += nums[i]
        }
    }
    return res
};

//执行用时 :128 ms, 在所有 JavaScript 提交中击败了95.61%的用户
//内存消耗 :39 MB, 在所有 JavaScript 提交中击败了49.85%的用户
