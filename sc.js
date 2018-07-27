const Discord = require('discord.js');
const config = require('./config');
const {
    promisify
} = require("util");
const readdir = promisify(require("fs").readdir);

/**
 * * Make our own client
 */

class SpaghettiClient extends Discord.Client {
    constructor() {
        super();
        this.config = config;

        this.init();
    }

    async init() {
        // * Require all modules
        require('./modules/reactionRoles')(this);
        require('./modules/helpers')(this);

        // * Load all commands from the commands folder
        this.commands = [];
        const cmdFiles = await readdir("./commands/");
        console.log(`Loading a total of ${cmdFiles.length} commands.`);
        cmdFiles.forEach(f => {
            if (!f.endsWith(".js")) return;
            const response = this.loadCommand(f);
            if (response) console.log(response);
        });

        // * Load all events from the event folder and bind them to the client
        const evtFiles = await readdir("./events/");
        console.log(`Loading a total of ${evtFiles.length} events.`);
        evtFiles.forEach(file => {
            const eventName = file.split(".")[0];
            const event = require(`./events/${file}`);
            client.on(eventName, event.bind(null, client));
            console.log(` - Loaded event '${eventName}'`);
        });

        this.login(this.config.token);
    }
}

const client = new SpaghettiClient();