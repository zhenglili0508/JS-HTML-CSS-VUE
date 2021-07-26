// var trap = function(height) {
//     let result = 0
//     let star = 0
//     function sumTrap(star,i){
//         let  partsum = 0 , other = 0
//         if(height[star]<height[i]){
//             for(j=star+1;j<i;j++){
//                 other += height[j]
//             }
//             partsum = height[star]*(i-star-1) - other
//         }else{

//         }
//         return partsum
//     }

//     for(let i=0;i<height.length;i++){
//         if(height[star]<=height[i]){
//             result += sumTrap(star,i)
//             star = i
//             console.log(star)
//         }
//     }
//     return result
// };

var trap = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))
