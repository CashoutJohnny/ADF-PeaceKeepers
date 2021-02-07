const mongoose = require('mongoose')
const config = require('../../config.json');
const guildConfig = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    prefix: {
        type: mongoose.SchemaTypes.String,
        required: false,
        default: `${config.client.prefix}`
    }
});

module.exports = mongoose.model('guildConfig', guildConfigSchema);