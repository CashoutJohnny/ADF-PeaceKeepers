const fs = require('fs');
const chalk = require('chalk');
module.exports = async (client) => {
    fs.readdirSync('./src/commands/').forEach(dir => {
        const commands = fs.readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`./commands/${dir}/${file}`);
            if (pull.name) {
                client.commands.set(pull.name, pull);
            } 
        }
    });
    console.log(chalk.grey.bold("[") + chalk.redBright("COMMANDS") + chalk.grey.bold("] ") + chalk.white("All commands have been loaded."));
}