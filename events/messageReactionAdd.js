module.exports = async (client, messageReaction, user) => {
    
    if(messageReaction.message.channel !== client.settings.reactionChannel) return;
    
    console.log(`#### Reaction clicked`);
    console.log(`   # Reaction: ${messageReaction._emoji.name}`);
    console.log(`   # User: ${user.tag}`);

}