// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
// 
// 说明:
// 
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 思路一:先截取nums1和nums2中的前m位和n位,然后把nums2推入nums1中,再排序,时间复杂度为O((n + m)\log(n + m))O((n+m)log(n+m))
var merge = function(nums1, m, nums2, n) {
    
    nums1.splice(m);
    nums2.splice(n)
    for(var i=0;i<n;i++){
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b) => a - b)
};


/********************************************************************分割线***************************************************/

// 思路2:双指针从后往前法.设定两个指针,指针p1指向nums1的元素数字最后一个位,p2指向nums2元素最后一个位,p指向nums1数组空间最后一位
// 先把p2指向的数与p1指向的数对比,p2比p1大就把p赋值为p2的值,然后p2指针和p指针往前移动
//如果p1比p2大,则把p赋值为p1的值,然后p1和p移动再比较,直到p2指针移动完
var merge = function(nums1, m, nums2, n) {
    var p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0) {
       nums1[p--] =
       ( p1 >= 0 && nums1[p1] > nums2[p2] ) ? nums1[p1--] : nums2[p2--];
    }
    return nums1;
};
