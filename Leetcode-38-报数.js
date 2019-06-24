// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

// 注意：整数顺序将表示为一个字符串。
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	    var res = '1';
	    for(var i=1; i<n; i++){
	        var count = 1;
	        var str = '';
	        for(var j=0; j<res.length; j++){
	            if(res[j]==res[j+1]){
	                count++;
	            } else {
	                str += count+res[j];
	                count = 1;
	            }
	        }
	        res = str;
	    }
	    return res;
	}; 
