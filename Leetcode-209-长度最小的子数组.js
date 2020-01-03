// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
			/**
			 * @param {number} s
			 * @param {number[]} nums
			 * @return {number}
			 */
			var minSubArrayLen = function(s, nums) {
			    let left=0;
				// 因为right会先移动所以为了加上nums[0]right设为-1
				let right=-1;
				let total=0;
				// 开始最小距离为数组的长度,且因为right为-1还需要+1
				let minDistance=nums.length+1;
				while(left<nums.length-1){
					if(right<nums.length-1&&total<s){
						right++;
						total+=nums[right];
					}else{
						total-=nums[left];
						left++;
					}
					if(total>=s){
						
						minDistance=Math.min(minDistance,right-left+1)
					}
				}
				if(minDistance==nums.length+1){
					return 0
				}
				return minDistance
			};
			
			// 执行结果：通过
			// 执行用时 :64 ms ms, 在所有 javascript 提交中击败了80.20%的用户
			// 内存消耗 :35.6 MB, 在所有 javascript 提交中击败了20.00%的用户
