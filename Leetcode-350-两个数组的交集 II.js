// 给定两个数组，编写一个函数来计算它们的交集。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 思路一:先对两个数组分别排序,然后分别设置一个指针pos1和pos2,用一个新的数组nums3来记录交集,
// 当指针指的数相等时两个指针同时向前,并且吧nums1推入记录交集的nums3中,
// 当不等时,较小的数值的指针往前挪动一位直到对应两个指针的数值再次相等
var intersect = function(nums1, nums2) {
	nums1.sort(function(nums1,nums2){
		return nums1-nums2;
	});
    nums2.sort(function(nums1,nums2){
		return nums1-nums2;
	});
	var pos1=0;
	var pos2=0;
	var nums3=[];
	while(pos1<nums1.length&&pos2<nums2.length){
		if(nums1[pos1]==nums2[pos2]){
			nums3.push(nums1[pos1]);
			pos1++;
			pos2++;
		}else if(nums1[pos1]>nums2[pos2]){
			pos2++
		}else{
			pos1++
		}
	}
	return nums3;
};
