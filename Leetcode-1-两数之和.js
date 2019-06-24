// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 思路一:假设上标为i,下标为j,下标永远在上标前面,遍历全部结果,当数组两个数相加得到目标和,则把上标下标推到记录结果的数组中返回出来.

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=0;j<nums.length;j++){
            if(i!=j && nums[i]+nums[j]== target){
                return [i,j];
            }
        }
    }
};

/*************************************分割线*********************************************/

var twoSum = function(nums, target) {
	   const map = {}
	   for (let i = 0; i < nums.length; i++){
	       if(map[target - nums[i] ] >= 0){
	           return [ map[target - nums[i] ], i];
	       }
		
	       map[nums[i]] = i;            
	    }
   
	}


