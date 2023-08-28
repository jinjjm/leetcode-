/**
 * 科大讯飞机器存储问题
 */
// 题目
// 自然语言处理（nlp）经常会需要解决一些字符串的子串问题。我们把它抽象为数组的连续子数组问题。
// 当处理一个数组时，机器会存储数组的一些连续子数组。不过为了节省存储空间，当机器遇到多个完全相同的连续子数组时只会存储一次。
// 现在有一个棘手的问题，给定了两个长度为n的数组，这两个数组均满足以下性质：1 到n恰好出现了一次，
// 请你判断机器存储完所有的连续子数组时，一共存储了多少次。
// 输入：
// 3
// 1 2 3
// 2 3 1
// 输出：
// 8
// 说明：
// [1],[2],[3],[1,2],[2,3],[3,1],[1,2,3],[2,3,1]一共存储了8次。
// 记 nums1、nums2
function solutation(nums1,nums2){
    let res=[],path=[]
    function backtracking(nums,startIndex){
        if(path.length!==0){
            // console.trace()
            console.log([...path]);
            let s = JSON.stringify([...path])
            if(!res.includes(s)){
                res.push(s)
            }
        }
        for(let i=startIndex;i<nums.length;i++){
            // if(i-startIndex>0) {
                
            //     continue;
            // }

            path.push(nums[i])
            backtracking(nums,i+1)
            path.pop()
        }
    }
    backtracking(nums1,0)
    backtracking(nums2,0)
    return res
}
console.log(solutation([1,2,3],[2,3,4]))
