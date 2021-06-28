var findNumberIn2DArray = function(matrix,target){
    if (matrix == null || matrix.length == 0) {
        return false;
    }
    var row = 0 
    var column = matrix[0].length-1
    while(row < matrix.length && column>=0){
        
            if(matrix[row][column] == target){
                return true
                break
            }else if(matrix[row][column] > target){
                column--
            }else{
                row++
            } 
            console.log("row:"+row+"---columns:"+column)
            
    }
    return false
}

var matrix = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]] 
var target = 5
var result = findNumberIn2DArray(matrix,target)
console.log("result ="+ result)