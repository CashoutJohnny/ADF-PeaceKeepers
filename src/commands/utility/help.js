const { MessageEmbed } = require('discord.js');
const name = 'help'
module.exports = {
    name: name,
    category: 'utility',
    run: async (client, message, args) => {
        const embed = new MessageEmbed().setColor("BLUE").setAuthor(`${client.user.username}`, client.user.avatarURL()).setDescription('Kick: !kick <@member> <reason>\n Ticket: !new').setFooter(`${client.user.username} Utility`, client.user.avatarURL()).setTimestamp()
            message.channel.send(embed)
    }
}