// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 思路一:先判断两个字符串的长度是否一致,一致的话把他们每个字符分开然后排序,如果对应每一位不同则返回false,否则为字母异位词
var isAnagram = function(s, t) {
	if(s.length!=t.length){
		return false;
	}
    var ress=s.split("").sort();
	var rest=t.split("").sort();
	
	for(var i=0;i<s.length;i++){
		if(ress[i]!=rest[i]){
			return false
		}
	}
	return true
};


/*****************************************分割线**********************************/
// 思路二:看到一个终极简单的解法,就是把字符串先分隔然后排序,在组合成一个字符串,相等则为字母异位词
var isAnagram = function(s, t) {
    return s.split('').sort().join('')==t.split('').sort().join('')
};




