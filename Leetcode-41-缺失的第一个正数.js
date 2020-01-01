// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 去掉负值
    nums = nums.filter(item => item > 0)
        // 去掉负值之后数组为空则直接返回1
    if (!nums.length) {
        return 1
    }
    // 升序排序
    nums.sort((a, b) => a - b)
        // 如果数组第一个值不为1,那么缺失的第一个值正数即为1
    if (nums[0] != 1) {
        return 1
    } else {
        // 如果数组的第一个值为1,则寻找之后不连续的数
        for (let i = 0; i < nums.length - 1; i++) {
            // 相邻差大于1此时最小的数之后+1即为缺失数
            if (nums[i + 1] - nums[i] > 1) {
                return nums[i] + 1
            }
        }
        // 整个数组都是连续的,那么数组最后一位+1即为缺失数
        return nums.pop() + 1
    }
};
// 执行结果： 通过
// 执行用时 :72 ms, 在所有 javascript 提交中击败了49.75%的用户
// 内存消耗 :35.5 MB, 在所有 javascript 提交中击败了6.70%的用户


// 快速排序
var firstMissingPositive = function(nums) {
        // 去掉负值
        nums = nums.filter(item => item > 0)
        let len = nums.length
        if (!len) {
            return 1
        } else {
            for (let i = 0; i < len; i++) {
                for (let j = i + 1; j < len; j++) {
                    if (nums[j] < nums[i]) {
                        [nums[j], nums[i]] = [nums[i], nums[j]]
                    }
                }
                if (i > 0) {
                    if (nums[i] - nums[i - 1] > 1) {
                        return nums[i - 1] + 1
                    }
                } else {
                    if (nums[i] != 1) {

                        return 1
                    }
                }
            }
            return nums[len - 1] + 1
        }
    }
    // 执行结果：通过
    // 执行用时 :68 ms, 在所有 javascript 提交中击败了70.69%的用户
    // 内存消耗 :35.8 MB, 在所有 javascript 提交中击败了5.26%的用户
