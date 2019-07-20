// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 
// 你可以假设数组中无重复元素。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路:直接遍历比较
var searchInsert = function(nums, target) {
    var res=null;
   for(var i=0;i<nums.length;i++){
       if(nums[i]>=target){
           return i
       }
   }
    return nums.length
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了99.79%的用户
// 内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了13.90%的用户