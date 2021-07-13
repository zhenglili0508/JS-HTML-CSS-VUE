var canCompleteCircuit = function(gas, cost) {
    let allGas = 0,allCost=0
    for(let i =0 ;i<gas.length ; i++){
        allGas += gas[i]
        allCost += cost[i]
    }

    if(allCost>allGas) return -1

    let abGas = 0
    let star = 0
    for(let i = 0;i<gas.length;i++){
        abGas = abGas+gas[i]-cost[i]
        if(abGas<0){
            abGas = 0
            star = i+1
        }
    }
    return star
};

let gas  = [1,2,3,4,5]
let cost = [3,4,5,1,2]
console.log(canCompleteCircuit(gas,cost))