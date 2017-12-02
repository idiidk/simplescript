import { default as chalk } from "chalk";

class Logger {
    static info(val) {
        console.log(chalk.blue("[+] " + val));
    }

    static warning(val) {
        console.log(chalk.orange("[*] " + val));
    }

    static error(val) {
        console.log(chalk.red("[-] " + val));
    }

    static log(val) {
        console.log(val);
    }
}

export { Logger };