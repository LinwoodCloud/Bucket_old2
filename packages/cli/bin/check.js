import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
const spinner = createSpinner('Run test').start();
const log = (...data) => {
    spinner.clear();
    console.log(...data);
    spinner.start();
};
setTimeout(() => {
    log(chalk.green('Success!'));
}, 1000);
setTimeout(() => {
    spinner.success();
}, 5000);
