const moment = require('moment');

module.exports = async (client, msg) => {

    // * Ignore if not a command or if the author is a bot
    if(msg.author.bot) return;
    if(!msg.content.startsWith(client.config.prefix)) return;

    // * Extract the arguments and shift to get rid of the prefix
    const args = msg.content.split(' ');
    args.shift();

    // * If the command doesn't exist, ignore it
    // * If it does, run the command
    if(!client.commands[args[0]]) return;
    client.commands[args[0]].run(client, msg, args);

    // * Log the command called
    const time = moment().format('MMMM Do YYYY, hh:mm:ss');

    console.log(`>>>> Command called [${time}]`);
    console.log(`   > User: ${msg.author.tag}`);
    console.log(`   > Content: ${msg.cleanContent}`);
}