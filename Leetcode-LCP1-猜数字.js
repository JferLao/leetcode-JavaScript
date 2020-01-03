//小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？
//输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let count=0
    let pos=0;
    while(pos<guess.length){
        if(guess[pos]==answer[pos]){
            count++
        }
        pos++
    }
    return count
};
//执行结果：通过
//执行用时 :56 ms, 在所有 JavaScript 提交中击败了91.40%的用户
//内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
