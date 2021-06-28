
var minTime = function(time, m) {
    if(time.length<=m){
        return 0
    }
   var time_sort = time.sort(function(a, b){return a - b});
   time_sort_splice = time_sort.splice(0,time.length-m)
   console.log(time_sort_splice)
   var result =0
   for(var i=0;i<time_sort_splice.length;i++){
    result += time_sort_splice[i]
   }
    return result
};

 var time =  [1,2,3,3,3]
 var m = 2
 console.log(minTime(time,m))