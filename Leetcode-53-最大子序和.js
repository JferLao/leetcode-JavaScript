// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路:这题很简单,就是遍历全部元素之后,通过相加之后比较,得出最大数
var maxSubArray = function(nums) {
	var max = nums[0],
		val = 0;
	for (var i = 0; i < nums.length; i++) {
		val += nums[i];
		max = val > max ? val : max;
		val = val < 0 ? 0 : val
	}
	return max;
};
var maxSubArray = function(nums) {
    let max = nums[0]
    let val = 0
    for (let i=0;i<nums.length;i++) {
        if (val > 0) {
            val += nums[i]
        } else {
            val = nums[i]
        }
        max = Math.max(val, max);
    }
    return max
};

// 执行结果：通过
// 显示详情
// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了88.97%的用户
// 内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了32.81%的用户
// 