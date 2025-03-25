/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const minusValue = prices[i] - minPrice;

        if (minusValue > profit) {
            profit = minusValue;
        }

        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
    }

    return profit;
};
