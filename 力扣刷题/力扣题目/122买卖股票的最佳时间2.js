// var maxProfit = function(prices) {
//     let minPrice = prices[0]
//     let result = 0
//     let all_result = 0
//     for(let i = 0; i<prices.length; i++){
//         if(prices[i]<prices[i-1]){
//             all_result +=result
//             result = 0
//             minPrice = prices[i]
//         }else{
//             minPrice = Math.min(minPrice,prices[i])
//             result = Math.max(result,prices[i]-minPrice)
//         }
//     }
//     all_result += result
//     return all_result
// };

var maxProfit = function(prices) {
    let profit = 0
    for(let i = 0; i<prices.length; i++){
      if(prices[i]<prices[i+1]){
          profit += prices[i+1]-prices[i]
      }
    }
    return profit
};

let prices =  [7,1,5,3,6,4]
console.log(maxProfit(prices))