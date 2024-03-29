const name = 'new'
module.exports = {
	name: name,
	category: 'Ticket',
	run: async (client, message, args, prefix) => {
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('You already have a ticket, please close your exsisting ticket first before opening a new one!');
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`You have successfully created a ticket! Please click on ${channel} to view your ticket.`);
			channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`${process.env.PREFIX}close\``);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === 'server-tickets')
			if(logchannel) {
				logchannel.send(`<@808072916046577664> ${message.author.id} Ticket a created. Click the following to veiw <#${message.author.id}>`);
			}
		});
	},
};