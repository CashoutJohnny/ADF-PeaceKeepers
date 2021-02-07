const { MessageEmbed } = require('discord.js');
const name = 'ping';
module.exports = {
    name: name,
    category: 'utility',
    run: async (client, message, args) => {
            let embed = new MessageEmbed().setColor('BLUE').setTitle('🏓 Pong').setDescription(`⏱ Bot Ping: ${Date.now() - message.createdTimestamp}ms\n💓 WebSocket Ping: ${client.ws.ping}ms`.replace('-', ''))
                .setFooter(`${client.user.username} Utility`, client.user.avatarURL())
                .setTimestamp()
            message.channel.send(embed)
    }
}