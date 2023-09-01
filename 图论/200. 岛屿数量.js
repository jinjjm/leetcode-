/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let dir = [[0, 1],[ 1, 0], [-1, 0], [0, -1]]; // 四个方向
    let bfs=(grid,visited,x,y)=>{
        let queue=[];
        queue.push([x,y]);
        visited[x][y] = true;
        while(queue.length){
            let top = queue.shift();//取出队列头部元素
            console.log(top)
            for(let i=0;i<4;i++){
                let nextX = top[0]+dir[i][0]
                let nextY = top[1]+dir[i][1]
                if(nextX<0||nextX>=grid.length||nextY<0||nextY>=grid[0].length)
                    continue;
                if(!visited[nextX][nextY]&&grid[nextX][nextY]==="1"){
                    queue.push([nextX,nextY])
                    visited[nextX][nextY] = true
                }
            }
        }
    }
    let dfs = (grid, visited, x, y) => {
        for (let i = 0; i < 4; i++) {
            let nextX = x + dir[i][0]
            let nextY = y + dir[i][1]
            if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length)
                continue;
            if (!visited[nextX][nextY] && grid[nextX][nextY] === "1") {
                
                visited[nextX][nextY] = true
                dfs(grid,visited,nextX,nextY)
            }
        }
    }
    let visited = new Array(grid.length).fill().map(()=>Array(grid[0].length).fill(false))
   
    let res = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(!visited[i][j]&&grid[i][j]==="1"){
                ++res;
                // 广度优先搜索
                bfs(grid,visited,i,j);
                // 深度优先搜索
                // visited[i][j] = true;
                // dfs(grid, visited, i, j);
            }
        }
    }
    return res
};