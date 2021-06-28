var minArray = function(numbers) {
    var index1 = 0
    var index2 = numbers.length -1
    var minindex = index1
    while(numbers[index1] >= numbers[index2]){
        if(index1 - index2 ==1){
            minindex = index2
            break
        }
        minindex  = Math.floor((index1+index2)/2)
        
        if(numbers[minindex]>=numbers[index1]){
            index1 = minindex
        }else if(numbers[minindex]<= numbers[index2]){
            index2 = minindex
        }
        // console.log(minindex)
    }
    return numbers[minindex]
};
var numbers = [3,4,5,1,2]
var result  = minArray(numbers)
console.log(result)