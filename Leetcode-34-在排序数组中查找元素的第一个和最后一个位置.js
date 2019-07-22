// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 
// 你的算法时间复杂度必须是 O(log n) 级别。
// 
// 如果数组中不存在目标值，返回 [-1, -1]。
// 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 思路一:直接遍历返回,但时间复杂度大于O(log n) 级别
var searchRange = function(nums, target) {
	var res=[]
   for(i=0;i<nums.length;i++){
       if(nums[i]==target){
           res.push(i)
       }
   }
   if(res.length>0){
   	return [res[0],res[res.length-1]]
   }
    return [-1,-1]
};
// 执行用时 :84 ms, 在所有 JavaScript 提交中击败了73.84%的用户,
// 内存消耗 :36.2 MB, 在所有 JavaScript 提交中击败了7.63%的用户



/*****************************************分割线**********************************/

// 简化版本:
var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};

// 执行用时 :92 ms, 在所有 JavaScript 提交中击败了55.31%的用户,
// 内存消耗 :35 MB, 在所有 JavaScript 提交中击败了51.14%的用户

/*****************************************分割线**********************************/
// 思路二:二分查找法,找出第一个和target相同的数和第一个比target大的数
var searchRange = function(nums, target) {
  let result = [-1, -1];
  let len = nums.length;
  if (len === 0) return result;
  let l = 0, r = len - 1;
  while (l < r) {
    let mid = (l + r) / 2 | 0;
    if (target <= nums[mid]) r = mid;
    else l = mid + 1
  }
  if (nums[l] !== target) return result;
  result[0] = l;

  r = len - 1;
  while(l < r) {
    let mid = (l + r) / 2 | 0;
    if (target >= nums[mid]) l = mid + 1
    else r = mid;
  }
  if (nums[r] === target) result[1] = r
  else result[1] = r - 1
  return result;
};