// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路一:用count记录0的个数,然后非0的位用nums中替代,最后再补全nums后的0
var moveZeroes = function(nums) {
	var count = 0;
      for(var i = 0; i < nums.length; i++){
          if(nums[i] !== 0){
              nums[count] = nums[i];
             count++;
         }
     }
     for(; count < nums.length ; count++){
         nums[count] = 0;
     }  
};

/*****************************************分割线**********************************/

// 思路二:创建一个数组记录为0的位置,通过splice方法移除0的位置,然后最够在数组后面添加回来,从后面开始移除避免位置混乱
var moveZeroes = function(nums) {
	var res=[],i;
	count=0;
	for(i=0;i<nums.length;i++){
		if(nums[i]===0){
			res.push(i);
		}
	}
	for(i=res.length-1;i>=0;i--){
		nums.splice(res[i],1)
	}
	for(i=0;i<res.length;i++){
		nums.push(0)
	}
	return nums
}
