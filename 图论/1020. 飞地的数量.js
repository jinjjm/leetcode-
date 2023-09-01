/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let visited = new Array(grid.length).fill().map(() => Array(grid[0].length).fill(false))
    let res = 0;
    // 将与边界值相邻的岛屿标记成海洋
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) {
                if (!visited[i][j] && grid[i][j] === 1) {
                    visited[i][j] = true
                    dfs(grid, i, j, visited)
                }
            }
        }
    }
    // 遍历中间岛屿
    res = 0; // 归零重新计数岛屿数量 
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            if (!visited[i][j] && grid[i][j] === 1) {
                res++
                visited[i][j] = true
                dfs(grid, i, j, visited)
            }
        }
    }
    function dfs(grid, x, y, visited) {
        for (let i = 0; i < 4; i++) {
            let nextX = x + dir[i][0]
            let nextY = y + dir[i][1]
            if (check(nextX, nextY)) continue;// 超出边界值
            if (!visited[nextX][nextY] && grid[nextX][nextY] === 1) {
                res++
                visited[nextX][nextY] = true
                dfs(grid, nextX, nextY, visited)
            }

        }
    }
    function check(nextX, nextY) {
        return nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length
    }
    return res
};