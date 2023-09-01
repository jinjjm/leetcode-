/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]; // 四个方向

    let visited = new Array(grid.length).fill().map(() => Array(grid[0].length).fill(false))

    let dfs = (grid, visited, x, y, m) => {
        for (let i = 0; i < 4; i++) {
            let nextX = x + dir[i][0]
            let nextY = y + dir[i][1]
            if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length)
                continue;
            if (!visited[nextX][nextY] && grid[nextX][nextY] === 1) {
                visited[nextX][nextY] = true
                m = dfs(grid, visited, nextX, nextY,m+1)
            }
        }
        // console.log(x, y, m)
        return m
    }
    let res = 0, max = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === 1) {
                // console.log(i,j)
                res++
                // 深度优先搜索
                visited[i][j] = true;
                let m = dfs(grid, visited, i, j, 1);
                console.log('岛屿面积: ', m)
                if (m > max) max = m;
            }
        }
    }
    console.log('岛屿数量：', res)
    return max
};