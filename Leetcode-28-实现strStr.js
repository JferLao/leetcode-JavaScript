// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 思路一:直接使用indexOf()方法,needle没找到返回-1,needle为空返回0
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };
// 

/*****************************************分割线**********************************/

// 思路二:首先判断haystack和needle为空的情况,再判断假如haystack和needle长度相同情况;
	  // 设置开始的点指向0开始遍历;并且设置两个指针posN,posH分别用于指向needle和haystack;
	  // 初始时posH指向startPoint,而posN指向needle[0];当两个指针相同时,两者同时向后挪动一位,相同继续挪动,直到posN与needle长度一致,
	  // 代表posH开始时的startPoint为第一次出现的位置.当两个指针都不同时,startPoint往后挪动一位,继续初始化比较.直到遍历结束都没有结果则返回-1
var strStr = function(haystack, needle) {
	if(haystack==""){
		return needle==="" ? 0 : -1 
	}
	if(needle==""){
		return 0
	}
	len1=haystack.length;
	len2=needle.length;
	if(len1===len2){
		return haystack==needle? 0:-1
	}
	var startPoint=0;
	while(startPoint<=len1-len2){
		var posH=startPoint;
		var posN=0;
		while(haystack[posH]==needle[posN]){
			posH++;
			posN++;
			if(posN==len2){
				return startPoint;
			}
		}
		startPoint++
	}
	return -1;
}



