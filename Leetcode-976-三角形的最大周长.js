// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

// 如果不能形成任何面积不为零的三角形，返回 0。
/**
 * @param {number[]} A
 * @return {number}
 */
// 降序排序之后从前面找能成三角形的三个数相加即可,没有返回0
var largestPerimeter = function(A) {
    A.sort((a,b)=>b-a)
    for(let i=0;i<A.length-2;i++){
        if(A[i]<(A[i+1]+A[i+2])){
            return A[i]+A[i+1]+A[i+2]
        }
    }
    return 0
};

// 执行用时 :108 ms, 在所有 JavaScript 提交中击败了83.87%的用户
// 内存消耗 :38.1 MB, 在所有 JavaScript 提交中击败了58.18%的用户

// 选择排序更快
var largestPerimeter = function (A) {
  var temp = undefined;
  var len=A.length
  for (let i = 0; i <len ; i++){
    for (let j = i+1; j < len; j++){
      if (A[i] < A[j]) {
        temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
    if (i >= 2 && A[i ] + A[i - 1] > A[i-2]) {
      return A[i] + A[i - 1] + A[i - 2];
    }
  }
  return 0
}
// 执行用时 :68 ms, 在所有 JavaScript 提交中
