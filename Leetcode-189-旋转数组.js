// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路一:用一个新的数组记录变换后的数组.先通过当前位置数+变换位置数和数组长度 求余得到变换后的位置,
// ,然后把新位置记录到新数组中去,然后把新数组中的数遍历替代原来数组中的位置,得到旋转后的数组
var rotate = function(nums, k) {
	var res=[];
   for(var i=0;i<nums.length;i++){
	   var count=(i+k) % nums.length;
	   res[count]=nums[i];
   }
   for(var j=0;j<nums.length;j++){
	   nums[j]=res[j]
   }
};

/*****************************************分割线**********************************/

// 思路二:利用js数组的方法,移动多少个位置,就把数组后面的数组用pop()方法移除,
// 然后用unshift()加到数组的前面即可得到旋转的数组
var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        var dd=nums.pop();
        nums.unshift(dd);
    }
};