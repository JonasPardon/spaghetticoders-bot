const moment = require('moment');

module.exports = async (client, messageReaction, user) => {
    
    // * If it's not the defined reaction channel, ignore the reaction
    if(messageReaction.message.channel !== client.settings.reactionChannel) return;
    
    // * Log the event
    const time = moment().format('MMMM Do YYYY, hh:mm:ss');

    console.log(`#### Reaction clicked [${time}]`);
    console.log(`   # Reaction: ${messageReaction._emoji.name}`);
    console.log(`   # User: ${user.tag}`);

    client.giveRoleFromReaction(user, messageReaction._emoji.name);

}