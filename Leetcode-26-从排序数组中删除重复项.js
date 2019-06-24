/**
 * @param {number[]} nums
 * @return {number}
 */
/** 题目:给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
/**思路一:定义一个count和i的标记点,i记录全部数组,count记录重复时的位置,开始时两个标记点都指向
 * nums[0],当两个数都相同时,i标记就继续向前走一步,count标记保持不动。当两个数不同时,
 * 两个标记都往前走一步，并且nums[count]标记替代了原来全部数组时重复数的位置,当前位置是一个新的
 * 不重复的数
*/
var removeDuplicates = function(nums) {
    var count=0;
    var len=nums.length;
    var i=0;
    if(len==0){
        return 0
    }else{
        for(i;i<len;i++){
            if(nums[i]!=nums[count]){
                count++;
                nums[count]=nums[i];
            }
			
        }
		
    }
    return count+1;
};

/*****************************************分割线**********************************/

/*思路二: 一级循环从左至右遍历数组，对比对象为该循环索引右侧的所有元素，所以二级循环取从右到左，
 *并终止于一级循环索引数i，遇到相同元素，立即删除右侧（二级循环中的）元素并变更原始数组，
 * 以保证一级循环过的元素都是唯一的。
 */
var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j > i; j--) {
            if (nums[i] == nums[j]) {
                nums.splice(j, 1);
            }
        }
    }  
    return nums.length;
}
