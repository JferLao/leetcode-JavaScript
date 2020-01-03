//给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
//把数转成字符串再求长度为偶数的个数
    return nums.filter(item=>item.toString().length%2==0).length
};

//执行结果：通过
//执行用时 :64 ms, 在所有 JavaScript 提交中击败了83.87%的用户
//内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
