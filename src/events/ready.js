const chalk = require('chalk')
module.exports = async (client) => {
    console.log(chalk.grey.bold("[")  + chalk.redBright("CLIENT") + chalk.gray.bold("]") +chalk.white(`Bot: ${client.user.tag}`));
    console.log(chalk.grey.bold("[") + chalk.redBright("CLIENT") +  chalk.gray.bold("]") +chalk.white(`Ping: ${client.ws.ping}`));
    console.log(chalk.grey.bold("[") + chalk.redBright("CLIENT") + chalk.gray.bold("]") + chalk.white('Completing startup...')); 
    await client.user.setPresence({
        activity: {
            name: 'Keeping Peace',
            type: 'PLAYING'
        },
        status: "Online"
    });
    console.log(chalk.grey.bold("[") + chalk.redBright("STARTUP") + chalk.grey.bold("] ") + chalk.white(`Startup Complete! Bot is online.`));
}