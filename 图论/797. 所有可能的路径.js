/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res=[],path=[]

    function backtracking(graph,start){
        if(start===graph.length-1){
            res.push([...path])
            return;
        }
        for(let i=0;i<graph[start].length;i++){
            path.push(graph[start][i])
            backtracking(graph,graph[start][i])
            path.pop()
        }
    }
    path.push(0)
    backtracking(graph,0)
    return res
};