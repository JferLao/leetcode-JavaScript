// 给定两个数组，编写一个函数来计算它们的交集。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 双循环暴力法最后用Set去重
var intersection = function(nums1, nums2) {
    let res=[]
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                res.push(nums1[i])
            }
        }
    }
    return [...new Set(res)]
};

// 执行用时 :68 ms, 在所有 JavaScript 提交中击败了73.10%的用户
// 内存消耗 :35.5 MB
