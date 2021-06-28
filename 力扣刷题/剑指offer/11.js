var getDigitSum = function(num){
    var sum = 0
    while(num>0){
        temp = num % 10
        // console.log("--------"+temp)
        sum+=temp
        num=Math.floor(num/10)
        // console.log("~~~~~~~~"+num)
    }
    return sum
}
var check = function(threshold,rows,cols,row,col){
    if(row>rows||row<0||col<0||col>cols){
        return False
    }
    if(getDigitSum(row)+getDigitSum(col) <= threshold){
        return true
    }
    return false
}

var movingCountCore = function(threshold,rows,cols,row,col){
    // if(check(threshold,rows,cols,row,col)){
    if(row<rows||row>0||col>0||col<cols) {
        if(getDigitSum(row)+getDigitSum(col) <= threshold){
            var count = 1+movingCountCore(threshold,rows,cols,row+1,col)
                        +movingCountCore(threshold,rows,cols,row-1,col)
                        +movingCountCore(threshold,rows,cols,row,col+1)
                        +movingCountCore(threshold,rows,cols,row,col-1)  
        }
    }   
    return count
}

var movingCount = function(threshold,rows,cols) {
    if(threshold<0||rows<0||cols<0){
        return 0
    }
    var row = 0
    var col = 0
    if(getDigitSum(row)+getDigitSum(col)<=threshold){
        var count = movingCountCore(threshold,rows,cols,row,col)
    }
    return count

};
var m=2
var n=3
var k=1
var Count  = movingCount(k,m,n)
console.log(Count)