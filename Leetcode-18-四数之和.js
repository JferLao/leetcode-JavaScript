// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。 
// 注意：
// 答案中不可以包含重复的四元组。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 思路:固定前两个数通过for循环控制,后面两个数用两个指针移动,和比目标小左指针右移动,和比右指针大右指针左移
// 还要判断前后两个数是否相同,相同则前移/后移
var fourSum = function(nums, target) {
	if (nums.length < 4) {
		return [];
	}
	var res = [],
		len = nums.length;
	nums.sort((a, b) => a - b);
	for (var i = 0; i < len - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		if (nums[0] + nums[1] + nums[2] + nums[3] > target) {
			break;
		}
		for (var j = i + 1; j < len - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) {
				continue;
			}
			var left = j + 1,
				right = len - 1;
			while (left < right) {
				var temp = nums[i] + nums[j] + nums[left] + nums[right];
				if (left != j + 1 && nums[left] == nums[left - 1] || temp < target) {
					left++;
				} else if (right != len - 1 && nums[right] == nums[right + 1] || temp > target) {
					right--;
				} else {
					res.push([nums[i], nums[j], nums[left], nums[right]])
					left++;
					right--;
				}
			}
		}
	}
	return res
};


// 执行用时 :132 ms, 在所有 JavaScript 提交中击败了92.77%的用户
// 内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了84.50%的用户
