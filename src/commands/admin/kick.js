const { MessageEmbed, message } = require('discord.js');
const name = 'kick'
module.exports = {
    name: name,
    category: "admin",
    run: async (client, message, args) => {
        message.delete();
        if (message.member.hasPermission('KICK_MEMBER'))   {
            const reason = message.content.split(" ").slice(2).join(' ');
            const user = message.mentions.users.first();
            const embed = new MessageEmbed().setColor('ff0000').setTitle(`${client.user.username} Moderation`).setDescription("You have been kicked from ADF PeaceKeepers").addFields({name: 'Reason:', value: `${reason}`},{name: 'Moderator:', value: `${message.author.tag}`}).setFooter("ADF PeaceKeepers", client.user.avatarURL()).setTimestamp();
            if (user) {
                const member = message.guild.member(user)
                if(!reason) return message.reply('**Please Proivde Me a Reason**').then(message => message.delete({ timeout: 3000}));
                if (member.hasPermission('KICK_MEMBERS')) return message.reply('This user is a Staff member I cannot do that!').then(message => message.delete({ timeout: 4000}));
                if (member) {
                    member.send(embed).then(() => {
                        member.kick(reason).then(() => {
                            const sembed = new MessageEmbed().setDescription(`✅ Successfully kicked ${user.tag} with reason: ${reason}`).setColor("GREEN")
                            message.channel.send(sembed)
                            const logsembed = new MessageEmbed().setColor('#ff0000').setTitle('Member Kicked').addFields({name: 'User:', value: `${member}`},{name: 'Moderator:', value: `${message.author}`},{name: 'Reason:', value: `${reason}`}).setTimestamp().setFooter('User Kicked');
                            const logschannel = message.guild.channels.cache.find(ch => ch.name === 'mod-log') 
                            logschannel.send(logsembed)
                        }).catch(err => {
                            message.reply('❌ Something went wrong! Please try again later.').then(message => message.delete({ timeout: 4000}));
                            console.log(err)
                        });
                    });
                } else message.reply('Cannot find that user!').then(message => message.delete({ timeout: 3000}));
            } else message.reply('**Please specify a user!**').then(message => message.delete({ timeout: 3000}));
        } else message.reply('**This is a Staff Only Command**').then(message => message.delete({ timeout: 4000}));
    }
}