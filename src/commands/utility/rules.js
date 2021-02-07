const { MessageEmbed } = require('discord.js');
const name = 'rules'
module.exports = {
    name: name,
    category: 'utility',
    run: async (client, message, args) => {
        message.delete();
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${message.guild.name} Rules📓`)
        .setThumbnail(client.user.avatarURL())
        .setDescription('``1. No console wars\n2. No racial or homophobic slurs\n 3. Respect everyone\n4. No greifing\n5. Be respectful\n6. Respect your uniform\n7. No spam or NSFW content\n8. All content should be kept in proper channels\n9. Do not ping staff unless absolutely necessary\n10.Separate branches will only chat in their respective channels\n11.No ping @ branches or everyone unless you are told to or you are in a commander or above position``')
        .setFooter(`${client.user.username} Utility`, client.user.avatarURL())
        .setTimestamp()
        message.channel.send(embed)
      }
}