const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('../config.json');
module.exports = async (client) => {
    mongoose.connect(`${config.database.type}://${config.database.username}:${config.database.password}@${config.database.host}/${config.database.name}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(chalk.grey.bold("[") + chalk.redBright("DATABASE") + chalk.grey.bold("]") + chalk.white(`Connted To MongoDB`));
}

