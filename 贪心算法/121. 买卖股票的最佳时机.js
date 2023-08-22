/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low=prices[0],high=prices[0]
    let value = 0
    for(let p of prices){
        if(p<low) {
            low = p;
            high = p
        }
        if(p>high){
            value = value<p-low?p-low:value
            high = p;
        }
    }
    return value
};