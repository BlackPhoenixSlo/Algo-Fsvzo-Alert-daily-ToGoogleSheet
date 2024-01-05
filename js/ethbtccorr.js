const correlations = require('./correlations');
const cryptoDataAPI = require('../js-you-need-to-modify/cryptoDataAPI');
const time = require('./time');


async function calculateCorrelations() {
    // Define the periods for correlation calculation
    const dayPeriods = [15, 30, 60, 90,120];
    let corr_sum = 0;
    try {
        // Calculate the average correlation between BTC and ETH for each period

        for (const period of dayPeriods) {
            const correlation = await correlations.getAverageCorrelationBetweenCoins('BTC', 'ETH', [period]);
            corr_sum = corr_sum + correlation / dayPeriods.length
            console.log(corr_sum)

            console.log(`Average correlation between BTC and ETH over the last ${period} days: ${correlation}`);
        }
    } catch (error) {
        console.error('Error calculating correlations:', error);
    }

    console.log(corr_sum)
    return(corr_sum)
}

// calculateCorrelations();

module.exports = calculateCorrelations;