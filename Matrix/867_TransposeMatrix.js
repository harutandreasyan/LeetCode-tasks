/*
    Given a 2D integer array matrix, return the transpose of matrix.

    The transpose of a matrix is the matrix flipped over its main diagonal,
    switching the matrix's row and column indices.
    
    Example 1:
    Input: matrix = [[1,2,3],       Output: [[1,4,7],
                     [4,5,6],                [2,5,8],
                     [7,8,9]]                [3,6,9]]
    
    
    Example 2:
    Input: matrix = [[1,2,3],       Output: [[1,4],
                     [4,5,6]]                [2,5],
                                             [3,6]]

    Constraints:
        m == matrix.length
        n == matrix[i].length
        1 <= m, n <= 1000
        1 <= m * n <= 10^5
        -10^9 <= matrix[i][j] <= 10^9
*/

/* Time - O(m * n), Space - O(m * n) */

var transpose = function (matrix) {
    const result = []

    for (let i = 0; i < matrix[0].length; i++) {
        const newRow = []

        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i])
        }
        result.push(newRow)
    }

    return result
}

// Example 1:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(transpose(matrix1)) // [[1,4,7], [2,5,8], [3,6,9]]

// Example 2:
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
]
console.log(transpose(matrix2)) // [[1,4], [2,5], [3,6]]
