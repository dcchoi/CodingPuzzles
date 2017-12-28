//stock prices as array
//indices are time in minutes past trade opening time (9:30 am)
//values are prices in $ of apple stock at the time

//e.g
//stock cost 500 at 10:30am
//stockPricesYesterday[60] = 500

//write function that takes stockPricesYesterday
//return best profit for 1 purchase and 1 sale of Apple stock yesterday

function getMaxProfit(prices) {
    if (prices.length < 1) {
        return 0;
    }
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
        var startPrice = prices[i];
        for (var j = i + 1; j < prices.length; j++) {
            var netProfit = prices[j] - prices[i]
            if( netProfit > maxProfit){
                maxProfit = netProfit
            }
        }
    }
    return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPricesYesterday));
//returns 6 (buying for 5$ and selling for 11)