// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 
// 你可以假设 nums1 和 nums2 不会同时为空。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 思路:把数组合并,判断数组内个数求中位数!
// var findMedianSortedArrays = function(nums1, nums2) {
// 	nums1=nums1.concat(nums2).sort((a, b) => a - b);
// 	var len=nums1.length;
// 	if(len%2!==0){
// 		return nums1[(len - 1)/2];
// 	}else{
// 		return (nums1[len/2] + nums1[len/2 - 1]) / 2
// 	}
// };
// 

