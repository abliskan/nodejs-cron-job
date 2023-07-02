import express from "express";
import cron from "node-cron";
import fs from 'fs';
import os from 'os';

const app = express();

// Cron job definition: run task every day at 00:00 AM
const task = cron.schedule('0 0 * * *', () => {
    const heap = process.memoryUsage().heapUsed / 1024 / 1024;
    const data = new Date.toISOString();
    const freeMemory = Math.round((os.freemem() * 100) / os.totalmem()) + "%";
    // log template: date | heap used | free memory
    let csv = `${data}, ${heap}, ${freeMemory}\n`;
    console.log('-----------------------');
    try {
        // generate .csv file to view of cron job server status
        fs.appendFile("cron-log.csv", csv, function (err) {
            if (err) throw err;
            console.log("Server details logged!");
        });

    } catch (error) {
        console.log(error);
    }
});

// Start the cron job
task.start();

// Start the express server
app.listen(3000, () => {
    console.log('Server is success run on port 3000');
})