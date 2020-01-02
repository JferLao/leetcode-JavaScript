var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {
     return 0
    }
    let l = 0,
     r = 1,
     max = 1
    while (r < s.length) {
     console.log(s.slice(l, r),s.charAt(r),s.slice(l, r).indexOf(s.charAt(r)));
     if (s.slice(l, r).indexOf(s.charAt(r)) > -1) {
      l += s.slice(l, r).indexOf(s.charAt(r)) + 1
     } else {
      max = Math.max(r - l + 1, max)
     }
     r++
    }
    return max
   }
    lengthOfLongestSubstring("abcabcaa")
   // 执行结果：通过

   // 执行用时 :104 ms, 在所有 javascript 提交中击败了59.72%的用户
   // 内存消耗 :38.1 MB, 在所有 javascript 提交中击败了82.05%的用户
