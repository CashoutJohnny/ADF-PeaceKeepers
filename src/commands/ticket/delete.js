const name = 'delete'
module.exports = {
	name: name,
	category: 'Ticket',
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('**You cannot use this command here. Please use this command when you want to delete a ticket**');
		}
	},
};