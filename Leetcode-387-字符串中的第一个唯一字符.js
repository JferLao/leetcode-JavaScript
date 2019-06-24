// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

/**
 * @param {string} s
 * @return {number}
 */

// 思路一:通过js的array位置方法,遍历从到到位,然后比较从开头到结尾相同的值找出不重复字符
var firstUniqChar = function(s) {
    for(var i = 0 ; i < s.length;i++){
        if(s.indexOf(s[i]) == s.lastIndexOf(s[i])){
           return i
        }
    }
    return -1
};


