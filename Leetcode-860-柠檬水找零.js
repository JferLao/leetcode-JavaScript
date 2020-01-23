/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 账户余额
    let balance = []
        // 当有钱收则一直遍历
    while (bills.length) {
        // 截取第一个钱收款
        let money = bills.shift()
            // 为5块不需要找零
        if (money === 5) {
            balance.push(money)
        } else {
            // 先对于余额降序排序
            balance.sort((a, b) => b - a)
                // 需要找的钱数
            let change = money - 5
                // 遍历余额账户
            for (let i = 0; i < balance.length; i++) {
                // 如果当前钱数不够
                if (balance[i] <= change) {
                    // 先扣掉这个钱
                    change -= balance[i]
                        // 移除相当于找回没有了
                    balance.splice(i, 1)
                        // 删除元素数组的长度发生了改变,需要维持数组原来的i不变(不影响后面)
                    i--
                }
                // 如果不需要找钱则跳出当前循环
                if (change === 0) {
                    break
                }
            }
            if (change !== 0) {
                return false
            } else {
                balance.push(money)
            }
        }
    }
    return true
};



// **********************************************************************
// 当收到20时,优先匹配店家手里的一张10和一张5，如有返回true
// 店家手里的10--
// 店家手里的5--
// 如没有重新匹配3张15，如有返回true
// 店家手里的5-=3
// 如都没有返回false
// 当收到10时
// 优先匹配一张5如有返回true
// 店家手里的5--，10++
// 如没有返回false
// 当收到5时
// 店家手里的5++


var lemonadeChange = function(bills) {
    var five = 0;
    var ten = 0;
    var len = bills.length;
    for (var i = 0; i < len; i++) {
        if (bills[i] == 5) {
            five++;
        } else if (bills[i] == 10) {
            if (five == 0) {
                return false
            };
            five--;
            ten++;
        } else if (bills[i] == 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了33.72%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了83.74%的用户

// *********************************************
var lemonadeChange = function(bills) {
    const map = {
        5: 0,
        10: 0,
        20: 0,
    };

    for (let key of bills) {
        if (key === 10) {
            if (map[5] > 0) map[5] -= 1;
            else return false;
        }

        if (key === 20) {
            if (!(map[5] > 2 || (map[5] > 0 && map[10] > 0))) return false;
            else if (map[10] > 0) {
                map[10] -= 1;
                map[5] -= 1;
            } else {
                map[5] -= 3;
            }
        }

        map[key] += 1;
    }

    return true;
};
//   执行用时 :68 ms, 在所有 JavaScript 提交中击败了84.29%的用户
// 内存消耗 :36.6 MB, 在所有 JavaScript 提交中击败了25.12%的用户
