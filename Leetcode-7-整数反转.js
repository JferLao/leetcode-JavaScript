// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

/**
 * @param {number} x
 * @return {number}
 */

// 思路一:先把数字转化为字符串,然后分隔开,如果是负数把负号移除,然后字符串倒转之后先加负号再把字符串拼接成数字.
// 如果是非负数直接倒转拼接,假如数超过范围直接返回0
var reverse = function(x) {
    var str=x.toString();
	var arr=str.split("");
	if(arr.indexOf("-")==0){
		arr.splice(0,1);
		arr.reverse();
		var minus=["-"];
		arr=minus.concat(arr);
	}else{
		arr.reverse();
	}
	var res=arr.join("");
	
	if(res<= Math.pow(-2,31) || res >= Math.pow(2,31) - 1 ){
       return 0;
   }
   return res;
};

/*************************************分割线*********************************************/



// 思路二:和思路一差不多,不过用数组会更方便.先把数字转化为字符串然后从后往前遍历,把数输入数组中,若原数组第一位为负号则在新数组中第一位加入负号
// 最后判断结果是否超过范围,超过则返回0
var reverse = function(x) {
   var resultArr = [];
   var intToStr = x.toString();
   for(var i = intToStr.length-1;i > 0;i--){
       resultArr.push(intToStr[i]);
   }
   if(intToStr[0] == "-"){
       resultArr.unshift("-");
   }
   resultArr.push(intToStr[0]);
   var resultNum = parseInt(resultArr.join(""));
   if(resultNum <= Math.pow(-2,31) || resultNum >= Math.pow(2,31) - 1 ){
       return 0;
   }
   return resultNum;
};



/*************************************分割线*********************************************/


// 思路三:通过求余的办法将把给定的数字n除以十，得到余数作为最低位，商作为新的数字n，result = result + 余数*10,
// 这样每次得到的最低位就会随着循环不断提升数位，从而得到逆序的result。
var reverse = function(x) {
    var y = Math.abs(x);
    var result = 0;
    while(y > 0){
        result = result * 10 + y % 10;
        y = parseInt(y / 10);
    }
    result = x < 0 ? -result : result;
    return result >= -Math.pow(2,31) && result <= Math.pow(2,31) - 1 ? result : 0;
};


console.log(reverse(1534236469));
// alert(reverse(321))