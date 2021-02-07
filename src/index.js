console.clear();
const { Client, Collection, Intents, Discord } = require("discord.js");
const chalk = require('chalk');
const config = require('./config.json')
const client = new Client({
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 260,
    disableMentions: 'none',
    fetchAllMembers: true,
    ws: { intents: Intents.ALL }
});

client.commands = new Collection();


client.once('ready', async () => require('./events/ready') (client));
client.on('message', async () => require('./events/message') (client, message));
client.on('guildCrete', async (guild) => require('./events/guildCreate') (guild));
console.log(chalk.grey.bold("[") + chalk.redBright("HANDLER") + chalk.grey.bold("] ") + chalk.white("All events have been loaded."));



client.login(config.client.token);