var merge = function(intervals) {
    if(intervals.length<2) return intervals

    intervals.sort(function (a,b) {
        return a[0]-b[0]
    })

    let curr = intervals[0]
    let result = []
    
    for(let i=1; i<intervals.length; i++){
        if(curr[1]>=intervals[i][0]){
            curr[1] = Math.max(curr[1],intervals[i][1])
        }else{
            result.push(curr)
            curr = intervals[i]
        }
    }

    result.push(curr)
    return result
};

intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))
