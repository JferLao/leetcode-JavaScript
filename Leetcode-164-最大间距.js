// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。
var maximumGap = function(nums) {
    nums.sort((a, b) => a - b)
    let pos = 0
    let res = []
    if (nums.length < 2) {
        return 0
    }
    while (pos < nums.length - 1) {
        res.push(nums[pos + 1] - nums[pos])
        pos++
    }
    return res.sort((a, b) => a - b)[res.length - 1]
};
// 执行结果： 通过
// 执行用时 :96 ms, 在所有 javascript 提交中击败了52.99%的用户
// 内存消耗 :36, 在所有 javascript 提交中击败了的用户

var maximumGap = function(nums) {
    let max = 0
    nums.sort((a, b) => a - b)
    if (nums.length < 2) {
        return 0
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > max) {
            max = nums[i + 1] - nums[i]
        }
    }
    return max
};
// 执行结果：通过
// 执行用时 :84 ms, 在所有 javascript 提交中击败了81.27%的用户
// 内存消耗 :36.1 MB, 在所有 javascript 提交中击败了17.68%的用户

// 类似冒泡
var maximumGap = function(nums) {
    if (nums.length < 2) {
        return 0
    }
    let len = nums.length
    let max = 0
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
        if (i < len) {
            // 因为i>0所以nums[1]-nums[0]这一步会被遗漏
            if (nums[i + 1] - nums[i] > max) {
                max = nums[i + 1] - nums[i]
            }
        }

    }
    return Math.max(max, nums[1] - nums[0])
};
// 执行结果：通过
// 执行用时 :308 ms, 在所有 javascript 提交中击败了16.73%的用户
// 内存消耗 :36.6 MB, 在所有 javascript 提交中击败了10.97%的用户
