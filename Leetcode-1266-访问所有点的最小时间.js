// 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。
// 你可以按照下面的规则在平面上移动：
// 每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
// 必须按照数组中出现的顺序来访问这些点。
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let sum = 0;
    let min = 0
    for (let i = 1; i < points.length; i++) {
        //数组前后之间x轴和y轴之间的距离最大值就为最小时间
        min = Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]))
        sum += min
    }
    return sum
};

// 执行结果：通过
// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了88.39%的用户
// 内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
