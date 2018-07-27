module.exports = async client => {

    client.loadCommand = (commandName) => {
        try {
            // const props = require(`../commands/${commandName}`);
            const command = require(`../commands/${commandName}`);
            console.log(` - Loaded Command: ${command.help.name}. 👌`);
            // if (props.init) {
            //     props.init(client);
            // }
            // client.commands.set(props.help.name, props);
            // props.conf.aliases.forEach(alias => {
            //     client.aliases.set(alias, props.help.name);
            // });

            client.commands[commandName.substring(0, commandName.length - 3)] = command;

            return false;
        } catch (e) {
            return `Unable to load command ${commandName}: ${e}`;
        }
    }

}