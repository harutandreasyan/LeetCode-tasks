/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
    
    Example 1:
    Input: nums = [2,2,1]
    Output: 1
    
    Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4
    
    Example 3:
    Input: nums = [1]
    Output: 1

    Constraints:
        1 <= nums.length <= 3 * 10^4
        -3 * 10^4 <= nums[i] <= 3 * 10^4
        Each element in the array appears twice except for one element which appears only once.
*/

/* Time - O(n), Space - O(1) */

var singleNumber = function (nums) {
	let single = nums[0]
	for (let i = 1; i < nums.length; ++i) {
		single ^= nums[i]
	}

	return single
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1
