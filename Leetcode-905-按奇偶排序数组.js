//给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。你可以返回满足此条件的任何数组作为答案。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let odd=[]
    let even=[]
    if(!A.length){
        return []
    }
    for(let i=0;i<A.length;i++){
        if(A[i]%2==1){
            odd.push(A[i])
        }else{
            even.push(A[i])
        }
    }
    return [...even,...odd]
};

//执行用时 :92 ms, 在所有 JavaScript 提交中击败了76.36%的用户
//内存消耗 :37.9 MB, 在所有 JavaScript 提交中击败了14.57%的用户
