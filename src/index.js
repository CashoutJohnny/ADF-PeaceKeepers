console.clear();
require('dotenv').config();
const { Client, Collection, Intents, Discord, MessageEmbed } = require("discord.js");
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
require('./database/connection') (client);
require('./command') (client);

client.once('ready', async () => require('./events/ready') (client));
client.on('message', async (message) => require('./events/message') (client, message));
client.on('guildCreate', async (guild) => require('./events/guildCreate') (guild));
client.on('guildDelete', async (guild) => require('./events/guildDelete') (guild));
console.log(chalk.grey.bold("[") + chalk.redBright("HANDLER") + chalk.grey.bold("] ") + chalk.white("All events have been loaded."));


client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '807840261216272405');
    if (!channel) return;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Welcome to the ADF PeaceKeeper ${member}`)
    channel.send(embed)
  });


client.login(process.env.token);