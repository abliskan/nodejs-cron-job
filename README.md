# nodejs-cron-job
CronJob is meant for performing regular scheduled actions such as backups, report generation, and so on. A CronJob creates a Job object approximately once per execution time of its schedule. 

## Cron Syntax
This is a quick reference to cron syntax and also shows the options supported by node-cron.

### Allowed fields
```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

### Allowed values

|     field    |        value        |
|--------------|---------------------|
|    second    |         0-59        |
|    minute    |         0-59        |
|     hour     |         0-23        |
| day of month |         1-31        |
|     month    |     1-12 (or names) |
|  day of week |     0-7 (or names, 0 or 7 are sunday)  |

## Installation
```
$ git clone https://github.com:abliskan/nodejs-cron-job.git
$ cd nodejs-cron-job
$ npm install
```

## Cron jobs
This cron job already given task to be executed every day at 00:00 AM. The cron job should update the car promotion status in the database if the promotionEndDate has passed.

## Running a Cronjob
```
var cron = require('node-cron');

var task = cron.schedule('0 0 * * *', () =>  {
  console.log('-----------------------');
}
// Perform your scheduled task here
});

// Start the cron job
task.start();
```

## Running Unit Tests
```
$ npm test
```
