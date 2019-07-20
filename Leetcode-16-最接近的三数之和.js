// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路一:最残暴的方法,三循环把全部结果都做出来,每个结果得到的和与目标数比较,把更小的数赋值给差.直到得到最小的差就把这三个数的和得出来
var threeSumClosest = function(nums, target) {
    var res=nums[0]+nums[1]+nums[2];
	var abs=Math.abs(res-target);
	for(var i=0;i<nums.length-2;i++){
		for(var j=i+1;j<nums.length-1;j++){
			for(var k=j+1;k<nums.length;k++){
				var temp=nums[i]+nums[j]+nums[k];
				if(Math.abs(temp-target)<abs){
					abs=Math.abs(temp-target);
					res=temp;
				}
			}
		}
	}
	return res
};
// 执行用时 :
// 344 ms, 在所有 JavaScript 提交中击败了7.28%的用户
// 内存消耗 :
// 34.7 MB, 在所有 JavaScript 提交中击败了86.42%的用户
// 

/*****************************************分割线**********************************/

// 思路二:与思路一思路类似,不过先排序,然后用双指针减少复杂性,左边指针指向i的下一位,右指针指向最后一位,三个数和相加比目标数大则右指针左移
// 三个数和相加比目标数小,左指针右移,三个数和相加等于目标数直接输出和.  最终得到最接近的和即可
var threeSumClosest = function(nums, target) {
	nums.sort(function(a, b) {
		return a - b
	});
	var res = nums[0] + nums[1] + nums[2];
	var abs = Math.abs(res - target)
	for (var i = 0; i < nums.length - 2; i++) {
		var left = i + 1;
		var right = nums.length - 1;
		while (left < right) {
			var temp = nums[i] + nums[left] + nums[right];
			if (Math.abs(temp - target) < abs) {
				abs = Math.abs(temp - target);
				res = temp;
			}
			if (temp > target) {
				right--
			} else if (temp < target) {
				left++
			} else {
				return temp
			}
		}
	}
	return res;
}

