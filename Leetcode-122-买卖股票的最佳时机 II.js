// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 
// 方法一:题目可知只有前一天价格比当天价格低才能买,假设我们起点利润为0,最高利润点为sum点,我们可以,
// 通过一个画坐标图看出,假设我按今天买明天卖的方案来思考,每天的利润为totals(有赚有亏),
// 赚的为正数,亏得为负数,那么只要把正数都相加起来就可以是最大利润了(需要画个图就能理解)
var maxProfit = function(prices) {
    var totals;
	var sum=0;
	if(prices.length<2){
		return 0;
	}
	for(var i=0;i<prices.length-1;i++){
		if(prices[i]<prices[i+1]){
			totals = prices[i+1]-prices[i];
			if(totals>0){
				sum=sum+totals;
				}
			}
			
			
		}
	return sum;
};