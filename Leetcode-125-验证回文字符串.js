// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

/**
 * @param {string} s
 * @return {boolean}
 */

// 思路一:除了字母和数字其他去除掉,转换为数组后使用reverse()倒转再拼接回字符串,全部转化为小写,比较两个字符串是否相等即可
var isPalindrome = function(s) {
	newstr = s.replace(/[^A-Za-z0-9]/g, "");
	backstr = newstr.split("").reverse().join("");
  if (newstr.toLowerCase() === backstr.toLowerCase()){
	return true;
  }else {
    return false;
}
};

/*****************************************分割线**********************************/

// 思路二:定义两个指针,一个指向字符串第一位,一个指向最后一位,判断每个字符的字符编码是否为字母或数字范围内,是则返回0.
// 遍历两个指针,假如判断字符为0且在字符串的范围内,左边指针向右,右边指针向左.依次比较前后两位.不同返回false相同返回true

var isPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    while (formatCode(s[p1]) == 0 && p1 < s.length) p1++;
    while (formatCode(s[p2]) == 0 && p2 > -1) p2--;
    if (formatCode(s[p1++]) != formatCode(s[p2--])) return false;
  }
  return true;
};

function formatCode(char) {
  if (char >= 'A' && char <= 'Z') return char.charCodeAt();
  if (char >= 'a' && char <= 'z') return char.charCodeAt() - 32;
  if (char >= '0' && char <= '9') return char.charCodeAt();
  return 0;
}