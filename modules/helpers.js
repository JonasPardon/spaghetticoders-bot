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

}