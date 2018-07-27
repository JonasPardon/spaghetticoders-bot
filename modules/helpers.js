module.exports = async client => {

    client.loadCommand = (commandName) => {
        try {
            const command = require(`../commands/${commandName}`);
            client.commands[commandName.substring(0, commandName.length - 3)] = command;
            console.log(` 👌 Loaded Command: ${command.help.name}.`);
        } catch (e) {
            console.log(`Unable to load command ${commandName}: ${e}`);
        }
    }

    client.loadEvent = (eventName) => {
        try{
            eventName = eventName.split(".")[0];
            const event = require(`./../events/${eventName}`);
            client.on(eventName, event.bind(null, client));
            console.log(` 👌 Loaded event: ${eventName}.`);
        }catch(e){
            console.log(`Unable to load event ${eventName}: ${e}`);
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