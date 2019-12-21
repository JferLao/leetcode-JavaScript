// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 
// 示例 1:
// 
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	// 字符串按空格进行分隔,保存数组,数组的元素的先后顺序就是单词的顺序
    let arr=s.split(' ')
	// 对数组进行遍历,对数组进行反转操作
	let result=arr.map((item)=>{
		return item.split('').reverse().join('')
	})
	return result.join(" ")
};
// 精简版
var reverseWords = function(str) {
	// 字符串按空格进行分隔,保存数组,数组的元素的先后顺序就是单词的顺序
	// 对数组进行遍历,对数组进行反转操作
	return str.split(' ').map(item=>{return item.split('').reverse().join('')}).join(' ')
};
// 使用正则分隔
var reverseWords = function(str) {
	// 字符串按空格进行分隔,保存数组,数组的元素的先后顺序就是单词的顺序
	// 对数组进行遍历,对数组进行反转操作
	return str.length ? str.match(/[\S]+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ') : ''
};

// 执行结果：通过
// 显示详情
// 执行用时 :76 ms, 在所有 javascript 提交中击败了98.74%的用户
// 内存消耗 :42.5 MB, 在所有 javascript 提交中击败了47.79%的用户
