// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 思路一:直接使用reverse()即可
var reverseString = function(s) {
    s.reverse();
};


/*****************************************分割线**********************************/

//思路二:设置两个指针,一个指第一位,第二个指最后一位,指针移动并且前后互换
var reverseString = function(s) {
	var temp;
    for( let i=0 , j=s.length-1; i<j ; i++,j--){
		temp=s[i];
		s[i]=s[j];
		s[j]=temp;
	}
};
