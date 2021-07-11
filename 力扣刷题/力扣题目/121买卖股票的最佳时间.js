var maxProfit = function(prices) {
    let minPrice = prices[0]
    let result = 0
    for(let i = 0; i<prices.length; i++){
        minPrice = Math.min(minPrice,prices[i])
        result = Math.max(result,prices[i]-minPrice)
    }
    return result
};

let prices = [1,2]
console.log(maxProfit(prices))