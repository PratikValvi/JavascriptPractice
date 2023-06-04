const buySellStock = (array) => {
    let minPrice = array[0];
    let maxProfit = 0;
    
    for(let index=1; index < array.length; index++) {
        let currentPrice = array[index];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }

    return maxProfit > 0 ? maxProfit : 0; 
}