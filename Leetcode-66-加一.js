// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 思路:循环从最高位开始,当数组后有9则返回0;并且数组前一位的数加一;
// 当数组第0位为0时,数组前加一项"1"
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	for(var i=digits.length-1;i>=0;i--){
		
		if(digits[i]==9){
			digits[i]=0;
			if (!digits[0]) {
                digits.unshift(1);
                return digits;
            }
		}else{
			digits[i]++;
			return digits;
		}
	}
	return digits
};