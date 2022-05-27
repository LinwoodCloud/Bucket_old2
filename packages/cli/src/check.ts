import chalk from 'chalk';
import ora from 'ora';

const spinner = ora('Run test')
spinner.start()

const log = (...data: any[]) => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}

setTimeout(() => {
	spinner.stop();
}, 1000);
