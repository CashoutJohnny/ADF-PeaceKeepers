const GuildConfig = require('../database/schemas/guildConfig');
module.exports = async (client, message) => {
 if (message.guild) return;
 const guildConfig = await GuildConfig.findOne({ guildID: message.guild.id })
 const prefix = await guildConfig.get('prefix');
 if (!message.guild || message.author.bot) return;
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const cmd = args.shift().toLowerCase();
 if (cmd.length == 0) return;
 const command = client.commands.get(cmd);
 if (!command) return
 command.run(client, message, args);
}