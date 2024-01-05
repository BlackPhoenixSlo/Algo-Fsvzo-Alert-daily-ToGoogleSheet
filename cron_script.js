const cron = require('node-cron');
const { main123 } = require('./index-runfromdesktop2'); // Adjust the filename as needed

cron.schedule('* * * * *', async () => { // 3 0 * * * Schedule at 00:03 UTC every day
  console.log('Running main function at 00:03 UTC every day');
  try {
    await main123();
  } catch (error) {
    console.error('Error in main function:', error);
  }
});