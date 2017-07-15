const chalk = require('chalk');

module.exports = function(app) {

    const ctx = new chalk.constructor({
        enabled: false
    });

    //const ctxs = new chalk.constructor({level: 0});

};

console.log(chalk.blue('Hello world!'));

console.log(chalk.red('Fuck you, chalk works'));

console.log(chalk.green('Fuck you, chalk works'));

//console.log(chalk.pink('Fuck you, chalk works'));