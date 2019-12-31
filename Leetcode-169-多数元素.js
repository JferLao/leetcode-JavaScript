/**
 * @param {number[]} nums
 * @return {number}
 */
 //暴力法直接双循环找出多数元素
var majorityElement = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    for(let i=0;i<nums.length;i++){
        let count=1;
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                count++
            }
            if(count>nums.length/2){
                return nums[i]
            }
        }
    }
};
//执行用时 :2296 ms, 在所有 javascript 提交中击败了5.02%的用户
//内存消耗 :37.5 MB, 在所有 javascript 提交中击败了46.88%的用户

//排序法
var majorityElement = function(nums) {
    nums.sort();
    return nums[parseInt(nums.length/2)];
}
//执行用时 :96 ms, 在所有 javascript 提交中击败了25.30%的用户
//内存消耗 :37.3 MB, 在所有 javascript 提交中击败了62.42%的用户

//哈希解法
var majorityElement = function(nums) {
    if(nums.length == 1) return nums[0];
    let map = {},result;
    for(let i = 0,len = nums.length;i<len;i++){
        if(map.hasOwnProperty(nums[i])){
            map[nums[i]]++;
            if(map[nums[i]] > len/2){
                result = nums[i];
            }
        }else{
            map[nums[i]] = 1;
        }
    }
    return result;  
};

//执行用时 :80 ms, 在所有 javascript 提交中击败了56.58%的用户
//内存消耗 :37.8 MB, 在所有 javascript 提交中击败了23.08%的用户
