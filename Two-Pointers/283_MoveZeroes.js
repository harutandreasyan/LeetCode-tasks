/*
    Given an integer array nums, move all 0's to the end of it while
    maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

    Example 2:
    Input: nums = [0]
    Output: [0]

    Constraints:
        1 <= nums.length <= 10^4
        -2^31 <= nums[i] <= 2^31 - 1
*/

/* Time - O(n), Space - O(1) */

var moveZeroes = function (nums) {
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (left !== i) {
                ;[nums[left], nums[i]] = [nums[i], nums[left]]
            }
            left++
        }
    }

    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12])) // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])) // [ 0 ]
console.log(moveZeroes([0, 1, 2, 0, 5, 5])) // [ 1, 2, 5, 5, 0, 0 ]
