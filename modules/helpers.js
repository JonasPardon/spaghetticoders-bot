module.exports = async client => {

    client.loadCommand = (commandName) => {
        try {
            const command = require(`../commands/${commandName}`);
            console.log(` - Loaded Command: ${command.help.name}. 👌`);
            client.commands[commandName.substring(0, commandName.length - 3)] = command;

            return false;
        } catch (e) {
            return `Unable to load command ${commandName}: ${e}`;
        }
    }

    client.loadReactionsChannel = async () => {
        return new Promise(async (resolve, reject) => {
            const reactionChannel = await client.channels.get(client.config.channels.reactionRoles);

            client.settings.reactionChannel = reactionChannel;
            
            await reactionChannel.fetchMessages()
                .then(messages => {
                    console.log('Reactions channel cached and ready to go!');
                    return resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

}