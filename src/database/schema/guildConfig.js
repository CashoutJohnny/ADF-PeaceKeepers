const mongoose = require('mongoose');
const guildConfigSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    prefix: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: `${process.env.PREFIX}`
    }
})

module.exports = mongoose.model('guildConfig', guildConfigSchema);