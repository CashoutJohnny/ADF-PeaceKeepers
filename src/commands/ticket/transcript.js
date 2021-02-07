const fetch = require('node-fetch');
const url = 'https://hastebin.com/';
const { MessageEmbed } = require('discord.js');
const name = 'transcript'
module.exports = {
	name: name,
	category: 'ticket',
	run: async (client, message, args) => {
		const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await fetch(url, { method: 'POST', body: output, headers: { 'Content-Type': 'text/plain' } });
					}
					catch(e) {
						return message.channel.send('**An error occurred, please try again!**');
					}

					const { key } = await response.json();
					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](https://hastebin.com/${key}.js)`)
						.setColor('GREEN');
					message.reply('the transcript is complete. Please click the link below to view the transcript', embed);
				});
			}
		}
		else {
			return message.reply(
				'**You cannot use this command here. Please use this command in a open ticket.**',
			);
		}
	},
};