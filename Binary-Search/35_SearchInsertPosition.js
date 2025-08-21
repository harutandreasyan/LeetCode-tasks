/*
    Given a sorted array of distinct integers and a target value,
    return the index if the target is found.
    If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

    Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

    Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

    Constraints:
        1 <= nums.length <= 10^4
        -10^4 <= nums[i] <= 10^4
        nums contains distinct values sorted in ascending order.
        -10^4 <= target <= 10^4
*/

/* Time - O(log n), Space - O(1) */

var searchInsert = function (nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            start = mid + 1
        }
        if (nums[mid] > target) {
            end = mid - 1
        }
    }

    return start
}

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
