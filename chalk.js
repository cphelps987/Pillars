const chalk = require('chalk');

module.exports = function (app) {

    const ctx = new chalk.constructor({enabled: false});

    //const ctx = new chalk.constructor({level: 0});

};

console.log(chalk.blue('Hello world!'));

console.log(chalk.red('Fuck you, it works'));
