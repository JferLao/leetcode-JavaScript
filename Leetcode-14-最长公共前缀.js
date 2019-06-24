// 编写一个函数来查找字符串数组中的最长公共前缀。
// 
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */

// 思路一:先判断数组是否为空,再判断第一个字符串是否为空.以第一个字符串为参考对象找共同前缀.设置一个res的字符串记录共同前缀,外层遍历第一个字符串的每一个字母,
// 内层遍历数组中每一个字符串.假如字符串字母相同时加入到res中,当每一个字符串中出现有不同的字母时则跳出循环返回到res中.
var longestCommonPrefix = function(strs) {
	var firstStr=strs[0];
	var res=""
    if(strs.length==0){
		return ""
	}
	if(firstStr==""){
		return ""
	}
	for(var i=0;i<firstStr.length;i++){
		for(var j=1;j<strs.length;j++){
			if(firstStr[i]!=strs[j][i]){
				return res
			}
		}
		res += firstStr[i];
	}
	return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));