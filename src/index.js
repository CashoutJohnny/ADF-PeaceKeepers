console.clear();
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
require('dotenv').config();

client.commands = new Collection();
require('./database/connection') (client);
require('./command') (client);

client.once('ready', async () => require('./events/ready') (client));
client.on('message', async (message) => require('./events/message') (client, message));
client.on('guildCreate', async (guild) => require('./events/guildCreate') (guild));
client.on('guildDelete', async (guild) => require('./events/guildDelete') (guild));
console.log(chalk.grey.bold("[") + chalk.redBright("HANDLER") + chalk.grey.bold("] ") + chalk.white("All events have been loaded."));


client.on('guildMemberAdd', (member, message) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Welcome to the ADF PeaceKeeper ${member}`)
    channel.send(embed);
    const aembed = new MessageEmbed()
    .setColor("RED")
    .setTitle('How To Join The Army')
    .setDescription('Roles:\n@Fighter Jet Squad\n @Helicopter Patrols\n @Patrol 1\n @Patrol 2\n @Manager\n @Peace Keepers\n @Private army\n@FIRST LIEUTENANT\n@Event Security\n Info About Roles:\n Fighter jet squad are the people who give the ground squads cover and do escorts\n Helicopter patrols fly around the streets making sure no one is killing innocents and does attacks on targets\n Patrol 1 is ground patrols they escorts and do extractions and survey the area in formation\nPatrol 2 is exactly like patrol 1 but seperate groups\nManger is someone who plans attack and make sure everyone has the right target')
  });

  
client.login(process.env.TOKEN);