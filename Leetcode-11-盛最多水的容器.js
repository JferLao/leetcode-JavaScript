// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 
// 说明：你不能倾斜容器，且 n 的值至少为 2。

/**
 * @param {number[]} height
 * @return {number}
 */
// 思路一:直接双循环把每一种都可能出现的组合都组合出来然后找出最大的值  缺点:js运算耗时大
// 执行用时 :944 ms, 在所有 JavaScript 提交中击败了37.74%的用户
var maxArea = function(height) {
    var maxarea=0
    for(var i=0;i<height.length;i++){
        for(var j=i+1;j<height.length;j++){
            var S=(j-i)*Math.min(height[i],height[j]);
			maxarea = Math.max(maxarea, S );
        }
    }
	return maxarea;
};
 
/*****************************************分割线**********************************/

// 思路二:双指针,第一个指针指向最左边,第二个指针指向最右边,max记录最大的面积,遍历直到两个指针相碰就结束
// 指针指示的高度谁更小谁往对方移动
var maxArea = function(height) {
  let i = 0,
      j = height.length - 1;
  let max = 0
  while (i < j) {
    max = Math.max(max, Math.min(height[i],height[j]) * (j-i))
    if (height[i] >= height[j]) {
      j--
    } else {
      i++
    }
  }
  return max
};

