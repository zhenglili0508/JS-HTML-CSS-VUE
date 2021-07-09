var spiralOrder = function(matrix) {
    if(matrix.length ==0){
        return []
    }

    let left = 0,top=0,bottom=matrix.length-1,right=matrix[0].length-1

    let result = []
    direction = "right"

    while(left<=right && top<=bottom){
        if(direction == 'right'){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i])
            }
            top++
            direction = 'bottom'
        }
        else if(direction == 'bottom'){
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        }
        else if(direction == 'left'){
            for(let i=right;i>=left;i--){
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'top'
        }
        else if(direction == 'top'){
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++
            direction = 'right'
        }
    }
    return result
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix))