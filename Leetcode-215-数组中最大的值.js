// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => b - a)[k - 1]
};
// 执行结果：通过
// 执行用时 :80 ms, 在所有 javascript 提交中击败了83.79%的用户
// 内存消耗 :36.5 MB, 在所有 javascript 提交中击败了11.30%的用户

var findKthLargest = function(nums, k) {
    let len = nums.length
    for (let i = nums.length - 1; i < len - k; i--) {
        for (let j = 0; j < len; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
        // k-1是索引值
        return nums[len - (k - 1)]
    }
};

// 冒泡排序,去掉多余的步骤
var findKthLargest = function(nums, k) {
    let len = nums.length - 1
    for (let i = len; i > len - k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    // k-1是索引值
    return nums[len - (k - 1)]
};

// 执行结果：通过
// 执行用时 :172 ms, 在所有 javascript 提交中击败了14.33%的用户
// 内存消耗 :36.4 MB, 在所有 javascript 提交中击败了14.72%的用户
