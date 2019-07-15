// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 
// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 思路:result记录满足条件的结果,len记录数组长度.先把数组排序.判断数组第一个数是否大于0和判断最后一个数是否小于0,满足直接返回数组
// 然后循环数组,i为被标记的数,创建双指针start指向i的下一位,end指向数组最后一位.  判断双指针加起来的数和i指的数的倒数作比较
//如果小于i的倒数,左指针往右移,大于i的倒数,右指针左移,相等直接把3个位置推入中间数组,然后中间数组推入结果数组,并且前后两个指针往中间移动一位
//如果左指针指的数与左边数相等指针再左移一位
//如果右指针的数与右边数相等指针再右移一位
var threeSum = function(nums) {
    var result = new Array();
    var len = nums.length;
    var flag = 0;
    nums.sort((a, b) => {
        return a-b;
    });
    if(nums[0] > 0 || nums[len - 1] < 0) return result;
    for(var i = 0; i < len; i++){
        if(nums[i] === nums[i-1]) continue;
        flag = 0 - nums[i];
        var start = i + 1, end = len - 1;

        while(start < end){
            var middle = new Array();
            if(nums[start] + nums[end] < flag){
                start ++;
            } else if(nums[start] + nums[end] > flag){
                end--;
            } else {
				middle.push(nums[i],nums[start],nums[end])
                result.push(middle)
                start += 1;
                end -= 1;
                while(start < end && nums[start] === nums[start - 1]){
                    start += 1;
                }
                while(start < end && nums[end] === nums[end + 1]){
                    end -= 1;
                }
            }
        }
    }
    return result;
};



