/*
    Given an array of integers temperatures represents the daily temperatures,
    return an array answer such that answer[i] is the number of days you have
    to wait after the ith day to get a warmer temperature.
    If there is no future day for which this is possible, keep answer[i] == 0 instead.

    Example 1:
    Input: temperatures = [73,74,75,71,69,72,76,73]
    Output: [1,1,4,2,1,1,0,0]
    
    Example 2:
    Input: temperatures = [30,40,50,60]
    Output: [1,1,1,0]
    
    Example 3:
    Input: temperatures = [30,60,90]
    Output: [1,1,0]
    
    Constraints:
        1 <= temperatures.length <= 10^5
        30 <= temperatures[i] <= 100
*/

/* Using monotonic-stack */
/* Time - O(n), Space - O(n) */

var dailyTemperatures = function (temperatures) {
    const stack = []
    const n = temperatures.length
    const result = new Array(n).fill(0)

    for (let i = 0; i < n; ++i) {
        while (stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
            const top = stack.pop()
            result[top] = i - top
        }

        if (i < n) {
            stack.push(i)
        }
    }

    return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [ 1, 1, 4, 2, 1, 1, 0, 0 ]
console.log(dailyTemperatures([30, 40, 50, 60])) // [ 1, 1, 1, 0 ]
console.log(dailyTemperatures([30, 60, 90])) // [ 1, 1, 0 ]
3