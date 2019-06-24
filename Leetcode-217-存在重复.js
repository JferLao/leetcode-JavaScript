// 给定一个整数数组，判断是否存在重复元素。
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 方法一:先排序,再判断左右两个数是否重复.
var containsDuplicate = function(nums) {
     nums.sort(compare);
	if(nums.length<2){
		return false;
	}
	for(var i=0;i<nums.length-1;i++){
		if(nums[i]==nums[i+1]){
			return true;
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
};

/*****************************************分割线**********************************/
// 方法二:让数组内全部数组一一比较
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length<2){return false;}
    for(var i=0;i<nums.length;i++){
       for(var j=i+1;j<=i+k&&j<nums.length;j++){
           if(nums[i]==nums[j]){return true;}
       }
    }
    return false;
}
