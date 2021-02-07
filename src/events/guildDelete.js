const guildConfig = require('../database/schema/guildConfig');
module.exports = async (guild) => {
    await guildConfig.deleteOne({ guildID: guild.id });
}