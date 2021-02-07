const { MessageEmbed } = require('discord.js');
const name = 'roles'
module.exports = {
    name: name,
    category: 'utility',
    run: async (client, message, args) => {
        message.delete();
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${message.guild.name} Roles📓`)
        .setThumbnail(client.user.avatarURL())
        .setDescription('``Roles:\nFighter Jet Squad\nHelicopter Patrols\nPatrol 1\nPatrol 2\nManager\nPeace Keepers\nPrivate army\nFIRST LIEUTENANT\nEvent Security\n``**Info About Roles:**\n**Fighter jet squad are the people who give the ground squads cover and do escorts\n Helicopter patrols fly around the streets making sure no one is killing innocents and does attacks on targets\n Patrol 1 is ground patrols they escorts and do extractions and survey the area in formation\nPatrol 2 is exactly like patrol 1 but seperate groups\nManger is someone who plans attack and make sure everyone has the right target**')
        .setFooter(`${client.user.username} Utility`, client.user.avatarURL())
        .setTimestamp()
        message.channel.send(embed)
      }
}