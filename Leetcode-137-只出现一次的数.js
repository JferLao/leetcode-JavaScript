// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路一:先排序,找出相邻的数组中不相等的数
var singleNumber = function(nums) {
	nums.sort(compare);
    if(nums.length<2){
		return nums
	}
	for(var i=0;i<nums.length;i=i+2){
		if(nums[i]!=nums[i+1]){
			return nums[i]
		}
		
	}
	return false;
};
function compare(value1,value2){
	if(value1<value2){
		return 1;
	}
	else if(value1>value2){
		return -1;
	}else{
		return 0;
	}
}

/*****************************************分割线**********************************/
// 思路二:利用相同数字做^异或运算，会得到0,不同数字异或运算得到该数字,最后求出该数字
var singleNumber = function(nums) {
	var count=0;
    if(nums.length<2){
		return nums
	}
	for(var i=0;i<nums.length;i++){
		count^=nums[i]
		
	}
	return count;
};