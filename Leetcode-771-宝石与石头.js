//给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少
// 是宝石。

//J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count=0;
    for(let i=0;i<S.length;i++){
        for(let j=0;j<J.length;j++){
            if(S[i]==J[j]){
                count++
            }
        }
    }
    return count
};
//执行结果：通过
//显示详情
//执行用时 :76 ms, 在所有 JavaScript 提交中击败了30.00%的用户
//内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了14.64%的用户

var numJewelsInStones = function(J, S) {
   let jarr = J.split("");
    let sarr = S.split("");
    return sarr.filter(item=>jarr.includes(item)).length
};
//执行用时 :56 ms, 在所有 JavaScript 提交中击败了98.38%的用户
//内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了57.70%的用户
