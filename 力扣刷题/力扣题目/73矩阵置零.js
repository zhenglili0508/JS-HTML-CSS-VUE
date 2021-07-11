var setZeroes = function(matrix) {
    let firstColHasZero = []
    let firstRowHasZero = []
    for(let i=0;i<matrix.length;i++){  //行数 
        if(matrix[i][0]==0){
            firstRowHasZero.push(i)
        }
    }
    console.log(firstRowHasZero)

    for(let i=0;i<matrix[0].length;i++){ //列数
        if(matrix[0][i]==0){
            firstColHasZero.push(i)
        }
    }

    console.log(firstColHasZero)

    for(let row = 1; row <matrix.length ;row++){
        for(let col = 1; col<matrix[0].length ;col++){
            if(matrix[row][col]==0){
                matrix[0][col] = 0
                matrix[row][0] = 0
            }
        }
    }


    for(let row = 1; row <matrix.length ;row++){
        for(let col = 1; col<matrix[0].length ;col++){
            if(matrix[row][0]==0 || matrix[0][col]==0){
                matrix[row][col] = 0
            }
        }
    }


    //如果有行有为0 的数  那么 把该 行 列 变成0 
    if(firstRowHasZero.length>0 ){
        for(let i=0;i<firstRowHasZero.length;i++){
            //取出 行  为0 的位置 
            for(let row = 0; row <matrix.length ;row++){    
                matrix[row][0] = 0
            }
            for(let col = 0; col<matrix[0].length ;col++){
                matrix[firstRowHasZero[i]][col] = 0
            }
        }
    }
   console.log(matrix)

   if(firstColHasZero.length>0){
    for(let i=0;i<firstColHasZero.length;i++){  
            for(let row = 0; row <matrix.length ;row++){
                matrix[row][firstColHasZero[i]] = 0
            }
            for(let col = 0; col<matrix[0].length ;col++){
                matrix[0][col] = 0
            }
        }
    }
    return matrix
}

let matrix = [[1,0]]

console.log(setZeroes(matrix))